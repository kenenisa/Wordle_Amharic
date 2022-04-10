import React, { useEffect, useState } from "react";
import "./Body.css";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import alphabet from './../../Assets/keysList.json'
import Hints from "./Hints/Hints";

function Body() {
  const init = !localStorage.words ? JSON.parse(localStorage.words) : [[], [], [], [], []]
  const [words, setWords] = useState(init);

  const initRowCount = !localStorage.rowCount ? JSON.parse(localStorage.rowCount) : 0
  const [rowCount, setRowCount] = useState(initRowCount);

  const initFinal = !localStorage.final ? JSON.parse(localStorage.final) : []
  const [final, setFinal] = useState(initFinal);

  const initEvaluated = !localStorage.evaluated ? JSON.parse(localStorage.evaluated) : [[], [], [], [], []]
  const [evaluated, setEvaluated] = useState(initEvaluated);
  const [x, setX] = useState(0);
  const [finished, setFinished] = useState(false);
  const intiHighlight = !localStorage.highlight ? JSON.parse(localStorage.highlight) : {}
  const [highlight, setHighlight] = useState(intiHighlight)
  const [shake, setShake] = useState(false);
  useEffect(() => {
    localStorage.words = JSON.stringify(words)
    localStorage.evaluated = JSON.stringify(evaluated)
    localStorage.rowCount = JSON.stringify(rowCount)
    localStorage.final = JSON.stringify(final)
    localStorage.highlight = JSON.stringify(highlight)
  }, [x])
  const changeWords = (k, replace = false) => {
    if (!finished) {
      const temp = words;
      if (temp[rowCount].length < 5 || replace) {
        if (words[rowCount].length) {
          if (!replace) {
            temp[rowCount].push(k);
          } else {
            const tr = temp[rowCount]
            tr[tr.length - 1] = k
            temp[rowCount] = tr
          }
        } else {
          temp[rowCount] = [k];
        }
        setWords(temp);
        setX(x + 1);
      }
    }

  };
  const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const toaster = (text) => {
    toast(text, {
      className: "message",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
    })
  }
  const spitPlace = (l) => {
    let place = l
    for (let i in alphabet) {
      if (alphabet[i].find(x => x === l)) {
        place = i
        break
      }
    }
    return place
  }
  const handleSubmit = async () => {
    if (words[rowCount].length === 5) {
      const evf = await fetch(
        process.env.REACT_APP_REMOTE_HOST +
        "/evaluate?tried=" +
        words[rowCount].join("")
      ).then((e) => e.json());
      const ev = evf.result;
      if (ev.join("") === [-1, -1, -1, -1, -1].join("")) {
        toaster("የእናትህ ነው እሱ። አስተካክል!")
        setShake(rowCount)
        setTimeout(() => {
          setShake(false)
        }, 1000)
      } else {
        if (ev) {
          const temp = final;
          temp[rowCount] = true;
          const evt = evaluated;
          evt[rowCount] = ev;
          const th = highlight
          words[rowCount].forEach((el, i) => {
            if (th[el] !== undefined) {
              th[el].ev = th[el].ev > ev[i] ? th[el].ev : ev[i]
            } else {
              th[el] = { ev: ev[i] }
            }
            if (!alphabet[el]) {
              const sp = spitPlace(el)
              if (th[sp] !== undefined) {
                if (th[sp].ch) {
                  th[sp].ch.push(ev[i])
                } else {
                  th[sp].ch = [ev[i]]
                }
              } else {
                th[sp] = { ch: [ev[i]] }
              }
            }
          });
          setHighlight(th)
          setEvaluated(evt);
          setFinal(temp);
          setRowCount(rowCount + 1);
          setX(x + 1);
        }
      }
      if (ev.join("") === [4, 4, 4, 4, 4].join("")) {
        setFinished(true)
        delay(1000).then(() =>
          toaster("ጀግና")
        );
      }
      // console.log(ev);
    }
  };

  const handleBackspace = () => {
    const temp = words;
    temp[rowCount].pop();
    setWords(temp);
    setX(x + 1);
  };
  return (
    <React.Fragment>
      <div className="grid">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          closeButton={false}
          transition={Slide}
          draggable
          pauseOnHover
        />
        <Grid words={words} final={final} evaluated={evaluated} shake={shake} />
      </div>
      <Keyboard
        setWords={changeWords}
        handleSubmit={handleSubmit}
        handleBackspace={handleBackspace}
        highlight={highlight}

      />
      <Hints rowCount={rowCount}/>
    </React.Fragment>
  );
}

export default Body;

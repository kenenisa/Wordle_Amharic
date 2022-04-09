import React, { useEffect, useState } from "react";
import "./Body.css";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wait } from "@testing-library/user-event/dist/utils";

function Body() {
  const init = localStorage.words ? JSON.parse(localStorage.words) : [[], [], [], [], []]
  const [words, setWords] = useState(init);

  const initRowCount = localStorage.rowCount ? JSON.parse(localStorage.rowCount) : 0
  const [rowCount, setRowCount] = useState(initRowCount);

  const initFinal = localStorage.final ? JSON.parse(localStorage.final) : []
  const [final, setFinal] = useState(initFinal);

  const initEvaluated = localStorage.evaluated ? JSON.parse(localStorage.evaluated) : [[], [], [], [], []]
  const [evaluated, setEvaluated] = useState(initEvaluated);
  const [x, setX] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    localStorage.words = JSON.stringify(words)
    localStorage.evaluated = JSON.stringify(evaluated)
    localStorage.rowCount = JSON.stringify(rowCount)
    localStorage.final = JSON.stringify(final)
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
  const handleSubmit = async () => {
    if (words[rowCount].length === 5) {
      const evf = await fetch(
        process.env.REACT_APP_REMOTE_HOST +
        "/evaluate?tried=" +
        words[rowCount].join("")
      ).then((e) => e.json());
      const ev = evf.result;
      if (ev.join("") === [-1, -1, -1, -1, -1].join("")) {
        toast("የእናትህ ነው እሱ። አስተካክል!", {
          className: "message",
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
        })
      } else {
        if (ev) {
          const temp = final;
          temp[rowCount] = true;
          const evt = evaluated;
          evt[rowCount] = ev;
          setEvaluated(evt);
          setFinal(temp);
          setRowCount(rowCount + 1);
          setX(x + 1);
        }
      }
      if (ev.join("") === [4, 4, 4, 4, 4].join("")) {
        setFinished(true)
        delay(1000).then(() =>
          toast("ጀግና", {
            className: "message",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
          })
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
        <Grid words={words} final={final} evaluated={evaluated} />
      </div>
        <Keyboard
          setWords={changeWords}
          handleSubmit={handleSubmit}
          handleBackspace={handleBackspace}
        />
    </React.Fragment>
  );
}

export default Body;

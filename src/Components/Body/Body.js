import React, { useEffect, useState } from "react";
import "./Body.css";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import alphabet from "./../../Assets/keysList.json";
import Hints from "./Hints/Hints";
import Evaluator from "../../Utils/Evaluator";
// import ProgressBar from "./Modal/ProgressBar/ProgressBar";
// import Modal from "./Modal/Modal";
import ModalComp from "./Modal/Modal";
import { endGame, getLocal, setLocal } from "../../Utils/progress";

function Body({ col, modalStatus, setModalStatus }) {
  let local = getLocal(col);

  const [words, setWords] = useState(local.words);
  const [rowCount, setRowCount] = useState(local.rowCount);
  const [final, setFinal] = useState(local.final);
  const [evaluated, setEvaluated] = useState(local.evaluated);
  const [finished, setFinished] = useState(local.finished);
  const [highlight, setHighlight] = useState(local.highlight);

  const [x, setX] = useState(0);
  const [shake, setShake] = useState(false);
  useEffect(() => {
    setLocal(col, {
      words,
      evaluated,
      rowCount,
      final,
      highlight,
      finished,
    });
  }, [x, words, evaluated, rowCount, highlight, final, finished, col]);
  useEffect(() => {
    local = getLocal(col);
    setWords(local.words);
    setRowCount(local.rowCount);
    setFinal(local.final);
    setEvaluated(local.evaluated);
    setFinished(local.finished);
    setHighlight(local.highlight);
    if(local.finished){
      setTimeout(()=>setModalStatus(true),2000)
    }
  }, [col]);
  const changeWords = (k, replace = false) => {
    if (!finished) {
      const temp = words;
      if (temp[rowCount].length < col || replace) {
        if (words[rowCount].length) {
          if (!replace) {
            temp[rowCount].push(k);
          } else {
            const tr = temp[rowCount];
            tr[tr.length - 1] = k;
            temp[rowCount] = tr;
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
  };
  const toaster = (text, autoClose = 3000) => {
    toast(text, {
      className: "message",
      position: "top-center",
      autoClose,
      hideProgressBar: true,
      closeOnClick: false,
    });
  };
  const spitPlace = (l) => {
    let place = l;
    for (let i in alphabet) {
      if (alphabet[i].find((x) => x === l)) {
        place = i;
        break;
      }
    }
    return place;
  };
  const handleSubmit = async () => {
    if (words[rowCount].length === col) {
      const ev = Evaluator(words[rowCount], col);
      if (ev.join("") === new Array(col).fill(-1).join("")) {
        const popupListWrong = ["ምንሼ", "ቀለደኛ ነህ", "አላለም🤭"];
        const popupWrong =
          popupListWrong[
            Math.floor(Math.random() * popupListWrong.length)
          ].toString();
        toaster(popupWrong);
        setShake(rowCount);
        setTimeout(() => {
          setShake(false);
        }, 1000);
      } else {
        if (ev) {
          const temp = final;
          temp[rowCount] = true;
          const evt = evaluated;
          evt[rowCount] = ev;
          const th = highlight;
          words[rowCount].forEach((el, i) => {
            if (th[el] !== undefined) {
              th[el].ev = th[el].ev > ev[i] ? th[el].ev : ev[i];
            } else {
              th[el] = { ev: ev[i] };
            }
            if (!alphabet[el]) {
              const sp = spitPlace(el);
              if (th[sp] !== undefined) {
                if (th[sp].ch) {
                  th[sp].ch.push(ev[i]);
                } else {
                  th[sp].ch = [ev[i]];
                }
              } else {
                th[sp] = { ch: [ev[i]] };
              }
            }
          });
          setHighlight(th);
          setEvaluated(evt);
          setFinal(temp);
          setRowCount(rowCount + 1);
          setX(x + 1);
        }
      }

      if (ev.join("") === new Array(col).fill(4).join("")) {
        setFinished(true);
        const popupList = ["ጀግና", "እሳት", "አንበሳ", "ወንዳታ", "ትችላለህ"];

        const popup =
          popupList[Math.floor(Math.random() * popupList.length)].toString();
        delay(1550).then(() => toaster(popup));
        delay(2000).then(() => setModalStatus(true));
        endGame(
          {
            rowCount,
            win: true,
          },
          col
        );
      } else if (rowCount + 1 === 6) {
        delay(1550).then(() => toaster(window.pw.join(""), false));
        endGame(
          {
            rowCount,
            win: false,
          },
          col
        );
        delay(2000).then(() => setModalStatus(true));
      }
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
          limit={1}
          pauseOnFocusLoss={false}
          closeButton={false}
          transition={Slide}
          draggable
          pauseOnHover
        />
        <Grid
          words={words}
          final={final}
          evaluated={evaluated}
          shake={shake}
          col={col}
          finished={finished}
        />
        <ModalComp
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          toaster={toaster}
          col={col}
          evaluated={evaluated}
        />
      </div>
      <Keyboard
        setWords={changeWords}
        handleSubmit={handleSubmit}
        handleBackspace={handleBackspace}
        highlight={highlight}
      />
      <Hints rowCount={rowCount} col={col} />
    </React.Fragment>
  );
}

export default Body;

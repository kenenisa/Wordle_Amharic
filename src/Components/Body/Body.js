import React, { useEffect, useState } from "react";
import "./Body.css";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wait } from "@testing-library/user-event/dist/utils";

function Body() {
  const [words, setWords] = useState([[], [], [], [], []]);
  const [rowCount, setRowCount] = useState(0);
  const [final, setFinal] = useState([]);
  const [evaluated, setEvaluated] = useState([]);
  const [x, setX] = useState(0);
  const changeWords = (k,replace=false) => {
    const temp = words;
    if (temp[rowCount].length < 5 || replace) {
      if (words[rowCount].length) {
        if(!replace){
          temp[rowCount].push(k);
        }else{
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
  };
  console.log(process.env.REACT_APP_REMOTE_HOST);
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
      if (ev.join("") === [4, 4, 4, 4, 4].join("")) {
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
      <div className="keyboard">
        <Keyboard
          setWords={changeWords}
          handleSubmit={handleSubmit}
          handleBackspace={handleBackspace}
        />
      </div>
    </React.Fragment>
  );
}

export default Body;

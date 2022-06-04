import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./Body/Body";
//
import stats from "./../Assets/stats.svg";
import info from "./../Assets/info.svg";
import Info from "./Body/Info/Info";
function App() {
  const [col, setCol] = useState(Number(localStorage.col) || 5);
  const [modalStatus, setModalStatus] = useState(false);
  const [infoStatus, setInfoStatus] = useState(false);

  const [showBody, setShowBody] = useState(true);
  const changeCol = (val) => {
    localStorage.col = val;
    setCol(val);
    setShowBody(false);
    setTimeout(() => {
      setShowBody(true);
    }, 100);
  };
  useEffect(() => {
    fetch(process.env.REACT_APP_REMOTE_HOST + "/getPlayWord?col=" + col)
      .then((e) => e.json())
      .then((e) => {
        window.pw = e;
        console.log(window.pw.join(""));
      });
  }, [col]);
  useEffect(() => {
    if (localStorage.infoCounter) {
      if (localStorage.infoCounter < 3) {
        localStorage.infoCounter += 1;
        setInfoStatus(true);
      }
    } else {
      localStorage.infoCounter = 1;
      setInfoStatus(true);
    }
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="left-header">
          <button
            className="bth info"
            onClick={() => setInfoStatus(!infoStatus)}
          >
            <img src={info} alt="info" />
          </button>
          <Info infoStatus={infoStatus} setInfoStatus={setInfoStatus} />
        </div>
        <h3>ወርድል</h3>
        <div className="right-header">
          <div className="col-amount">
            <div
              className={`col-box ${col === 5 && "selected"}`}
              onClick={() => changeCol(5)}
            >
              <div className="num">5</div>
            </div>
            <div
              className={`col-box ${col === 4 && "selected"}`}
              onClick={() => changeCol(4)}
            >
              <div className="num">4</div>
            </div>
          </div>
          <button
            className="bth stats"
            onClick={() => setModalStatus(!modalStatus)}
          >
            <img src={stats} alt="stats" />
          </button>
        </div>
      </div>
      <div className="body">
        <div className={`fade-body ${showBody && "fade"}`}>
          {showBody && (
            <Body
              col={col}
              modalStatus={modalStatus}
              setModalStatus={setModalStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./Body/Body";
import Info from "./Body/Info/Info";
import { resetLocal } from "../Utils/progress";
//
import stats from "./../Assets/stats.svg";
import info from "./../Assets/info.svg";
import { crypt, decrypt } from "../Utils/Encryption";
//
function App() {
  const [col, setCol] = useState(Number(localStorage.col) || 4);
  const [modalStatus, setModalStatus] = useState(false);
  const [infoStatus, setInfoStatus] = useState(false);
  const [readyToDisplay, setReadyToDisplay] = useState(false);
  const [readyWord, setReadyWord] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [error, setError] = useState(false);
  const blink = () => {
    setShowBody(false);
    setTimeout(() => {
      setShowBody(true);
    }, 100);
  };
  const changeCol = (val) => {
    localStorage.col = val;
    setCol(val);
    blink();
  };

  useEffect(() => {
    const populate = () => {
      const num = { 4: "four", 5: "five" };
      window.pw = JSON.parse(decrypt(localStorage.art))[num[col]];
      console.log(window.pw.join(""));
      !readyWord && setReadyWord(true);
    };
    if (!localStorage.art) {
      fetch(process.env.REACT_APP_REMOTE_HOST + "/getPlayWord?col=" + col)
        .then((e) => e.json())
        .then((e) => {
          localStorage.art = crypt(JSON.stringify(e));
          populate();
        })
        .catch((e) => {
          console.error(e);
          setError(true);
        });
    } else {
      populate();
    }
  }, [col, readyWord]);
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
    if (resetLocal()) {
      setReadyToDisplay(true);
    }
  }, []);
  if (readyToDisplay && readyWord) {
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
  return (
    <h1 style={{ color: "white", textAlign: "center" }}>
      {/* ሰከን ይበሉ... */}
      {error ? `ችግር አለ። ደግመው ይሞክሩ` : `ሰክን ይበሉ...`}
    </h1>
  );
}

export default App;

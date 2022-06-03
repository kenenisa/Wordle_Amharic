import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./Body/Body";
function App() {
  const [col, setCol] = useState(Number(localStorage.col) || 5);
  const [modalStatus, setModalStatus] = useState(false);
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
  return (
    <div className="App">
      <div className="header">
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
            className="stats"
            onClick={() => setModalStatus(!modalStatus)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                fill="white"
                d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
              ></path>
            </svg>
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
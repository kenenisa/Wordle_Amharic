import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./Body/Body";
function App() {
  const [col, setCol] = useState(Number(localStorage.col) || 5);
  const changeCol = (val) => {
    localStorage.col = val;
    setCol(val);
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
        <div className="col-amount">
          <div
            className={`col-box ${col === 5 && "selected"}`}
            onClick={() => changeCol(5)}
          >
            <div className="num">5</div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`col-box ${col === 4 && "selected"}`}
            onClick={() => changeCol(4)}
          >
            <div className="num">4</div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="body">
        <Body col={col} />
      </div>
    </div>
  );
}

export default App;

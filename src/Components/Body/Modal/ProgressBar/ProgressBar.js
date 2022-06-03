import React from "react";
import "./ProgressBar.css";

function ProgressBar({ progress, row, totalPlayed, today }) {
  // if (today[row]) {
  //   progress += 1;
  // }
  const percent = (progress * 100) / totalPlayed;
  return (
    <div>
      <div className="outer">
        <div className="outerLeft">
          <p>{row + 1}</p>
        </div>
        <div className="outerRight" style={{ width: (percent || 0) + "%" }}>
          <div className="inner" />
          <div className="innerRight"></div>
          <div className={`innerLeft ${today[row] && "today"}`}>
            <p>{progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

import React from "react";
import "./ProgressBar.css";

function ProgressBar({ progress, row, totalPlayed,rowCount }) {
  const percentile = (progress * 100) / totalPlayed;
  return (
    <div>
      <div className="outer">
        <div className="outerLeft">
          <p>{row + 1}</p>
        </div>
        <div className="outerRight" style={{ width: percentile + "%" }}>
          <div className="inner" />
          <div className="innerRight"></div>
          <div className={`innerLeft ${rowCount === row && 'today'}`}>
            <p>{progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

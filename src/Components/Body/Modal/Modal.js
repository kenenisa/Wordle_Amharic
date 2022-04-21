import React, { useState } from "react";

import Modal from "react-modal";
import ProgressBar from "./ProgressBar/ProgressBar";

Modal.setAppElement("#root");
function ModalComp({ rowCount, modalIs }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState([4, 3, 1, 0, 2]);
  const totalPlayed = progress.reduce((prev, current) => prev + current);
  console.log({ totalPlayed });

  return (
    <div className="modalWrapper">
      {/* <button onClick={() => setIsOpen(true)}>open</button> */}
      <Modal
        isOpen={modalIs}
        onRequestClose={() => setIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modalHeader">
          <button
            className="modalBtn"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
          <h3 className="headerText">Statistics</h3>
        </div>
        <div className="modalBody">
          <div className="modal_stats">
            <div className="stat played">
              <div className="top">{totalPlayed}</div>
              <div className="bottom">played</div>
            </div>
            <div className="stat win">
              <div className="top">100</div>
              <div className="bottom">win %</div>
            </div>
            <div className="stat currentStreak">
              <div className="top">2</div>
              <div className="bottom">
                current <br /> Streak
              </div>
            </div>
            <div className="stat maxStrak">
              <div className="top">2</div>
              <div className="bottom">
                max <br /> Streak
              </div>
            </div>
          </div>
          <h3 className="graphHeader">Guss Distribution</h3>
          <div className="graph">
            {progress.map((prog, key) => (
              <ProgressBar
                className="ProgressBar"
                progress={prog}
                row={key}
                key={key}
                totalPlayed={totalPlayed}
                rowCount={rowCount}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComp;

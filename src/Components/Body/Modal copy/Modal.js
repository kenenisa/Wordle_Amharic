import React from "react";
import "./Modal.css";
import Modal from "react-modal";
import { gameData } from "../../../Utils/progress";
import ProgressBar from "./ProgressBar/ProgressBar";
import Timer from "./Timer/Timer";
import ShareGenerator from "../../../Utils/ShareGenerator";

Modal.setAppElement("#root");
function ModalComp({ modalStatus, setModalStatus, toaster,col,evaluated }) {
  let data = gameData(col);
  // const [progress, setProgress] = useState(data.progress);
  const totalPlayed = data.totalPlayed;
  const share = () => {
    navigator.clipboard.writeText(ShareGenerator(evaluated));
    toaster("Text copied to clipboard")
  };
  return (
    <div className="modalWrapper">
      <Modal
        isOpen={modalStatus}
        onRequestClose={() => setModalStatus(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modalHeader">
          <button
            className="modalBtn"
            onClick={() => {
              setModalStatus(false);
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
              <div className="top">{data.winPercent}</div>
              <div className="bottom">win %</div>
            </div>
            <div className="stat currentStreak">
              <div className="top">{data.currentStreak}</div>
              <div className="bottom">
                current <br /> Streak
              </div>
            </div>
            <div className="stat maxStrak">
              <div className="top">{data.maxStreak}</div>
              <div className="bottom">
                max <br /> Streak
              </div>
            </div>
          </div>
          <h3 className="graphHeader">Guess Distribution</h3>
          <div className="graph">
            {data.progress.map((prog, key) => (
              <ProgressBar
                className="ProgressBar"
                progress={prog}
                row={key}
                key={key}
                totalPlayed={totalPlayed}
                today={data.today}
              />
            ))}
          </div>
          <div className="bottom-area">
            <div className="time">
              <p>Next in</p>
              <Timer />
            </div>
            <div className="share">
              <button className="share-btn" onClick={share}>
                SHARE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComp;

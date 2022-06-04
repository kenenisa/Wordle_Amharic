import React from "react";
import "./Modal.css";
import Modal from "react-modal";
import { gameData } from "../../../Utils/progress";
import ProgressBar from "./ProgressBar/ProgressBar";
import Timer from "./Timer/Timer";
import ShareGenerator from "./../../../Utils/ShareGenerator";

Modal.setAppElement("#root");
function ModalComp({ modalStatus, setModalStatus, toaster, col, evaluated }) {
  let data = gameData(col);
  // const [progress, setProgress] = useState(data.progress);
  const totalPlayed = data.totalPlayed;
  const share = () => {
    navigator.clipboard.writeText(ShareGenerator(evaluated));
    toaster("Text copied to clipboard");
    alert("Text copied, paste it where you want to share");
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
            &#215;
          </button>
          <h3 className="headerText">ውጤት</h3>
        </div>
        <div className="modalBody">
          <div className="modal_stats">
            <div className="stat played">
              <div className="top">{totalPlayed}</div>
              <div className="bottom">ተጫውቷል</div>
            </div>
            <div className="stat win">
              <div className="top">{data.winPercent}</div>
              <div className="bottom">አሸነፍ %</div>
            </div>
            <div className="stat currentStreak">
              <div className="top">{data.currentStreak}</div>
              <div className="bottom">
                የአሁኑ <br /> ስትሪክ
              </div>
            </div>
            <div className="stat maxStrak">
              <div className="top">{data.maxStreak}</div>
              <div className="bottom">
                ከፍተኛ <br /> ስትሪክ
              </div>
            </div>
          </div>
          <h3 className="graphHeader">የግምት ስርጭት</h3>
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
              <p>ቀጥሎ ወርድል</p>
              <Timer />
            </div>
            <div className="share-con">
              <button className="share-btn" onClick={share}>
                አጋራ
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComp;

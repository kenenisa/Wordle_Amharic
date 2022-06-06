import React from "react";
import "./Info.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
function Info({ infoStatus, setInfoStatus }) {
  return (
    <div className="modalWrapper">
      <Modal
        isOpen={infoStatus}
        onRequestClose={() => setInfoStatus(false)}
        className="info-modal"
        overlayClassName="Overlay"
      >
        <div className="modalHeader">
          <button
            className="modalBtn"
            onClick={() => {
              setInfoStatus(false);
            }}
          >
             &#215;
          </button>
          <h3 className="headerText"><u>እንዴት እንደሚጫወቱ</u></h3>
        </div>
        <div className="modalBody">
          <div className="section">
            በስድስት ሙከራዎች ውስጥ ቃላትን ይገምቱ። <br></br>
            <br></br>
            እያንዳንዱ ግምት ትክክለኛ ባለ አምስት/አራት ፊደል ቃል መሆን አለበት። ለማስገባት አስገባን ይጫኑ።
            <br></br>
            <br></br>
            ከእያንዳንዱ ግምት በኋላ፣ ግምታችሁ ከቃሉ ጋር ምን ያህል ቅርብ እንደነበረ ለማሳየት የሳጥኖቹ ቀለም
            ይቀየራል።
            <br></br>
          </div>
          <div className="section">
            <h4>ምሳሌዎች - ቃል: መንደር</h4>
            <div className="grid_wrapper for-info">
              <div className="grid_row row-0 final ">
                <div className="row_items correct a0 ">መ</div>
                <div className="row_items a1 ">ጋ</div>
                <div className="row_items a2 ">ቢ</div>
                <div className="row_items a3 ">ት</div>
              </div>
            </div>
            <p>🟩 ፊደል መ በቃሉ(መንደር) ውስጥ እና በትክክለኛው ቦታ ላይ ነው።</p>
            <div className="grid_wrapper for-info">
              <div className="grid_row row-0 final ">
                <div className="row_items  a0 ">እ</div>
                <div className="row_items correctWrongPlace a1">ር</div>
                <div className="row_items a2 ">ጥ</div>
                <div className="row_items a3 ">ብ</div>
              </div>
            </div>
            <p>🟨 ር የሚለው ፊደል በቃሉ(መንደር) ውስጥ ነው ግን በተሳሳተ ቦታ ላይ ነው።</p>
            <div className="grid_wrapper for-info">
              <div className="grid_row row-0 final ">
                <div className="row_items correctFamily a0 ">ማ</div>
                <div className="row_items  a1">ሲ</div>
                <div className="row_items a2 ">ን</div>
                <div className="row_items a3 ">ቆ</div>
              </div>
            </div>
            <p>
              🟦 ማ የሚለው ፊደል በትክክለኛው ቦታ ላይ ነው ግን ትክክለኛው ቤተሰብ አይደለም(<u>መ</u> ሙ ሚ{" "}
              <u>ማ</u> ሜ ም ሞ)
            </p>
            <div className="grid_wrapper for-info">
              <div className="grid_row row-0 final ">
                <div className="row_items a0 ">ሽ</div>
                <div className="row_items a1">ል</div>
                <div className="row_items correctFamilyWrongPlace a2 ">ማ</div>
                <div className="row_items a3 ">ት</div>
              </div>
            </div>
            <p>
              🟪 ማ የሚለው ፊደል በትክክለኛው ቦታ ላይ አይደለም እና ትክክለኛው ቤተሰብ አይደለም(<u>መ</u> ሙ
              ሚ <u>ማ</u> ሜ ም ሞ)
            </p>
            <div className="grid_wrapper for-info">
              <div className="grid_row row-0 final ">
                <div className="row_items a0 ">አ</div>
                <div className="row_items a1">በ</div>
                <div className="row_items a2 ">ሰ</div>
                <div className="row_items incorrect a3 ">ለ</div>
              </div>
            </div>
            <p>
              ⬛ ለ የሚለው ፊደል ቤተሰብ በሙሉ(<u>ለ</u> ሉ ሊ ላ ሌ ል ሎ) በቃሉ(መንደር) ውስጥ የለም። ይህን ፊደል
              አይጠቀሙ!
            </p>
          </div>
          <div className="section">
            <b>አዳዲስ ቃል በየቀኑ ይገኛል!</b>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Info;
//እንዴት እንደሚጫወቱ

// ምሳሌዎች

// ፊደል W በቃሉ ውስጥ እና በትክክለኛው ቦታ ላይ ነው.

// እኔ የሚለው ፊደል በቃሉ ውስጥ ነው ግን በተሳሳተ ቦታ ላይ።

// የ U ፊደል በማንኛውም ቦታ በቃሉ ውስጥ የለም።

// አዲስ WORDLE በየቀኑ ይገኛል!

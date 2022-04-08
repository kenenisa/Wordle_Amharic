import React, { useEffect, useState } from "react";
import ChildKeys from "./ChildKeys/ChildKeys";
import "./Keyboard.css";
import Keys from "./Keys/Keys";
import check from "./../../../Assets/check.svg"
import backspace from "./../../../Assets/backspace.svg"
function Keyboard({ setWords, handleSubmit, handleBackspace }) {
  const [child, setChid] = useState(false);
  const changeChid = (k) => {
    setChid(k)
    setWords(k)
  }
  return (
    <div className="keyboards">
      <ChildKeys k={child} setWords={setWords} />
      <div className="keyboard first_row">
        <Keys changeKey={changeChid} k="ሀ" />
        <Keys changeKey={changeChid} k="ለ" />
        <Keys changeKey={changeChid} k="መ" />
        <Keys changeKey={changeChid} k="ረ" />
        <Keys changeKey={changeChid} k="ሰ" />
        <Keys changeKey={changeChid} k="ሸ" />
        <Keys changeKey={changeChid} k="ቀ" />
        <Keys changeKey={changeChid} k="በ" />
        <Keys changeKey={changeChid} k="ተ" />
        <Keys changeKey={changeChid} k="ቸ" />
        <Keys changeKey={changeChid} k="ኀ" />
      </div>
      <div className=" keyboard second_row">
        <Keys changeKey={changeChid} k="ነ" />
        <Keys changeKey={changeChid} k="ኘ" />
        <Keys changeKey={changeChid} k="አ" />
        <Keys changeKey={changeChid} k="ከ" />
        {/* <Keys changeKey={changeChid} k="ኸ" /> */}
        <Keys changeKey={changeChid} k="ሰ" />
        <Keys changeKey={changeChid} k="ሸ" />
        <Keys changeKey={changeChid} k="ወ" />
        <Keys changeKey={changeChid} k="ዘ" />
        <Keys changeKey={changeChid} k="ዠ" />
        <Keys changeKey={changeChid} k="የ" />
        <Keys changeKey={changeChid} k="ደ" />
      </div>
      <div className="keyboard third_row">
        <button className="keys e a" onClick={handleSubmit}>
          <img src={check} width="23"/>
        </button>
        <Keys changeKey={changeChid} k="ጀ" />
        <Keys changeKey={changeChid} k="ገ" />
        <Keys changeKey={changeChid} k="ጠ" />
        <Keys changeKey={changeChid} k="ጨ" />
        <Keys changeKey={changeChid} k="ጰ" />
        <Keys changeKey={changeChid} k="ፀ" />
        <Keys changeKey={changeChid} k="ፈ" />
        <Keys changeKey={changeChid} k="ፐ" />
        <button className="keys b a" onClick={handleBackspace}>
          <img src={backspace} width="23"/>
        </button>
      </div>
      <div className="actions">


      </div>
    </div>
  );
}

export default Keyboard;
// ሀ
// ለ
// ሐ
// መ
// ሠ
// ረ
// ሰ
// ሸ
// ቀ
// በ
// ተ
// ቸ
// ኀ
// ነ
// ኘ
// አ
// ከ
// ኸ

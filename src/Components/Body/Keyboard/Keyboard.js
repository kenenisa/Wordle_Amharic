import React, { useEffect, useState } from "react";
import ChildKeys from "./ChildKeys/ChildKeys";
import "./Keyboard.css";
import Keys from "./Keys/Keys";
import check from "./../../../Assets/check.svg"
import backspace from "./../../../Assets/backspace.svg"
function Keyboard({ setWords, handleSubmit, handleBackspace,highlight }) {
  const [child, setChid] = useState(false);
  const changeChid = (k) => {
    setChid(k)
    setWords(k)
  }
  return (
    <div className="keyboards">
      <ChildKeys k={child} setWords={setWords} highlight={highlight}/>
      <div className="keyboard first_row">
        <Keys changeKey={changeChid} k="ሀ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ለ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="መ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ረ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ሰ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ሸ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ቀ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="በ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ተ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ቸ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ኀ" highlight={highlight}/>
      </div>
      <div className=" keyboard second_row">
        <Keys changeKey={changeChid} k="ነ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ኘ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="አ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ከ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ወ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ዘ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ዠ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="የ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ደ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ጀ" highlight={highlight}/>
      </div>
      <div className="keyboard third_row">
        <button className="keys e a" onClick={handleSubmit}>
          <img src={check} width="23"/>
        </button>
        <Keys changeKey={changeChid} k="ገ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ጠ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ጨ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ጰ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ፀ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ፈ" highlight={highlight}/>
        <Keys changeKey={changeChid} k="ፐ" highlight={highlight}/>
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

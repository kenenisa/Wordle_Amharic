import React, { useEffect, useState } from "react";
import ChildKeys from "./ChildKeys/ChildKeys";
import "./Keyboard.css";
import Keys from "./Keys/Keys";
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
        <Keys changeKey={changeChid} k="ሐ" />
        <Keys changeKey={changeChid} k="መ" />
        <Keys changeKey={changeChid} k="ሠ" />
        <Keys changeKey={changeChid} k="ረ" />
        <Keys changeKey={changeChid} k="ሰ" />
        <Keys changeKey={changeChid} k="ሸ" />
        <Keys changeKey={changeChid} k="ቀ" />
        <Keys changeKey={changeChid} k="በ" />
        <Keys changeKey={changeChid} k="ተ" />
        <Keys changeKey={changeChid} k="ቸ" />
      </div>
      <div className=" keyboard second_row">
        <Keys changeKey={changeChid} k="ኀ" />
        <Keys changeKey={changeChid} k="ነ" />
        <Keys changeKey={changeChid} k="ኘ" />
        <Keys changeKey={changeChid} k="አ" />
        <Keys changeKey={changeChid} k="ከ" />
        <Keys changeKey={changeChid} k="ኸ" />
        <Keys changeKey={changeChid} k="ሰ" />
        <Keys changeKey={changeChid} k="ሸ" />
        <Keys changeKey={changeChid} k="ወ" />
        <Keys changeKey={changeChid} k="ዐ" />
        <Keys changeKey={changeChid} k="ዘ" />
        <Keys changeKey={changeChid} k="ዠ" />
      </div>
      <div className="keyboard third_row">
        <Keys changeKey={changeChid} k="የ" />
        <Keys changeKey={changeChid} k="ደ" />
        <Keys changeKey={changeChid} k="ጀ" />
        <Keys changeKey={changeChid} k="ገ" />
        <Keys changeKey={changeChid} k="ጠ" />
        <Keys changeKey={changeChid} k="ጨ" />
        <Keys changeKey={changeChid} k="ጰ" />
        <Keys changeKey={changeChid} k="ጸ" />
        <Keys changeKey={changeChid} k="ፀ" />
        <Keys changeKey={changeChid} k="ፈ" />
        <Keys changeKey={changeChid} k="ፐ" />
        <Keys changeKey={changeChid} k="ቨ" />
      </div>

      <div className="actions">
        <div className="keys e" onClick={handleSubmit}>
          Enter
        </div>
        <div className="keys b" onClick={handleBackspace}>
          bksps
        </div>
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

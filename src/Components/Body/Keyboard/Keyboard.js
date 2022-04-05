import React, { useEffect, useState } from "react";
import ChildKeys from "./ChildKeys/ChildKeys";
import './Keyboard.css'
import Keys from "./Keys/Keys";
function Keyboard() {
  const [child,setChid] = useState(false)
  useEffect(()=>{
    console.log(child);
  },[child])
  return (
    <div className="keyboards">
      <ChildKeys k={child}/>
      <div className="keyboard first_row">
        <Keys changeKey={setChid} k="ሀ"/>
        <Keys changeKey={setChid} k="ለ"/>
        <Keys changeKey={setChid} k="ሐ"/>
        <Keys changeKey={setChid} k="መ"/>
        <Keys changeKey={setChid} k="ሠ"/>
        <Keys changeKey={setChid} k="ረ"/>
        <Keys changeKey={setChid} k="ሰ"/>
        <Keys changeKey={setChid} k="ሸ"/>
        <Keys changeKey={setChid} k="ቀ"/>
        <Keys changeKey={setChid} k="በ"/>
        <Keys changeKey={setChid} k="ተ"/>
        <Keys changeKey={setChid} k="ቸ"/>
      </div>
      <div className=" keyboard second_row">
        <Keys changeKey={setChid} k="ኀ"/>
        <Keys changeKey={setChid} k="ነ"/>
        <Keys changeKey={setChid} k="ኘ"/>
        <Keys changeKey={setChid} k="አ"/>
        <Keys changeKey={setChid} k="ከ"/>
        <Keys changeKey={setChid} k="ኸ"/>
        <Keys changeKey={setChid} k="ሰ"/>
        <Keys changeKey={setChid} k="ሸ"/>
        <Keys changeKey={setChid} k="ወ"/>
        <Keys changeKey={setChid} k="ዐ"/>
        <Keys changeKey={setChid} k="ዘ"/>
        <Keys changeKey={setChid} k="ዠ"/>
        
      </div>
      <div className="keyboard third_row">
        <div className="keys">Enter</div>
        <Keys changeKey={setChid} k="የ"/>
        <Keys changeKey={setChid} k="ደ"/>
        <Keys changeKey={setChid} k="ጀ"/>
        <Keys changeKey={setChid} k="ገ"/>
        <Keys changeKey={setChid} k="ጠ"/>
        <Keys changeKey={setChid} k="ጨ"/>
        <Keys changeKey={setChid} k="ጰ"/>
        <Keys changeKey={setChid} k="ጸ"/>
        <Keys changeKey={setChid} k="ፀ"/>
        <Keys changeKey={setChid} k="ፈ"/>
        <Keys changeKey={setChid} k="ፐ"/>
        <Keys changeKey={setChid} k="ቨ"/>
        <div className="keys">bksps</div>

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

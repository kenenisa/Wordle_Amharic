import React from "react";

function Keys({ k, changeKey, highlight }) {
  let val = highlight[k]
  let ch = []
  if (val && val.ch) {
    ch = val.ch
  }
  const handleClick = () => {
    changeKey(k);
  };
  const highlightType = () => {
    if (val) {
      if(val.ch){
        if(val.ch.find(e=>e==0) !== undefined){
          return "incorrect"; // if it's children are incorrect
        }
      }
      val = val.ev
      if (val === 4) return "correct";
      if (val === 3) return "correctWrongPlace";
      if (val === 2) return "correctFamily";
      if (val === 1) return "correctFamilyWrongPlace";
      if (val === 0) return "incorrect";
    }
    return ''
  }
  

  return (
    <button className={`keys ${highlightType()} `} onClick={handleClick}>
      {ch.map((e, i) => <span className={'i' + e} key={i}></span>)}
      {k}
    </button>
  );
}

export default Keys;

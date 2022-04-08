import React from "react";
import "./GridRow.css";
//
function Grid_row({ word, final, evaluated }) {
  console.log(evaluated);
  const itemType = (val) => {
    if (evaluated) {
      const ev = evaluated[val];
      if (ev === 4) return "correct";
      if (ev === 3) return "correctWrongPlace";
      if (ev === 2) return "correctFamily";
      if (ev === 1) return "correctFamilyWrongPlace";
      if (ev === 0) return "incorrect";
      // console.log(val)
    }
    return "";
  };
  const aD = (val) => {
    return "a" + val;
  };
  return (
    <div className={`grid_row ${final && "final"}`}>
      <div className={`row_items ${itemType(0)} ${aD(0)}`}>
        {word[0] ? word[0] : ""}
      </div>
      <div className={`row_items ${itemType(1)} ${aD(1)}`}>
        {word[1] ? word[1] : ""}
      </div>
      <div className={`row_items ${itemType(2)} ${aD(2)}`}>
        {word[2] ? word[2] : ""}
      </div>
      <div className={`row_items ${itemType(3)} ${aD(3)}`}>
        {word[3] ? word[3] : ""}
      </div>
      <div className={`row_items ${itemType(4)} ${aD(4)}`}>
        {word[4] ? word[4] : ""}
      </div>
    </div>
  );
}

export default Grid_row;

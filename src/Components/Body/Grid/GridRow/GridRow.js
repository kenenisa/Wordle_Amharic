import React from "react";
import "./GridRow.css";
import Item from "./Item/Item";
//
function Grid_row({ row, word, final, evaluated, shake,loading,col }) {
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
  const column = []
  for(let i = 0; i < col;i++){
    column.push(0)
  }
  return (
    <div className={`grid_row row-${row} ${final ? "final":''} ${row === shake ? 'shake' : ''}`}>
      {column.map((v, key) => <Item pos={key} word={word} itemType={itemType} aD={aD} key={key} />)}

    </div>
  );
}

export default Grid_row;

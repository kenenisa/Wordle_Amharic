import React from "react";

function Grid_row({word,final}) {
  return (
    <div className={`grid_row ${final && 'final'}`}>
      <div className="row_items">{word[0]?word[0]:''}</div>
      <div className="row_items">{word[1]?word[1]:''}</div>
      <div className="row_items">{word[2]?word[2]:''}</div>
      <div className="row_items">{word[3]?word[3]:''}</div>
      <div className="row_items">{word[4]?word[4]:''}</div>
    </div>
  );
}

export default Grid_row;
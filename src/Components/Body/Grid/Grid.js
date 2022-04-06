import React from "react";
import './Grid.css';

import GridRow from './GridRow/GridRow';
//
function Grid({words,final}) {
  const rowSize = [0, 0, 0, 0, 0]
  console.log(words);
  return (
    <div className="grid_wrapper">
      {rowSize.map((k, i) => <GridRow key={i} word={words[i]} final={final[i]}/>)}
    </div>
  );
}

export default Grid;
import React from "react";
import './Grid.css';

import GridRow from './GridRow/GridRow';
//
function Grid() {
  return (
    <div className="grid_wrapper">
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </div>
  );
}

export default Grid;

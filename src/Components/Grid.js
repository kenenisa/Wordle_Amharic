import React from "react";
import "../Styles/grid_styles.css";
import Grid_row from "./Grid_row";

function Grid() {
  return (
    <div className="grid_wrapper">
      <Grid_row />
      <Grid_row />
      <Grid_row />
      <Grid_row />
      <Grid_row />
      <Grid_row />
    </div>
  );
}

export default Grid;

import React from 'react'
import "./Body.css";
import Grid from './Grid/Grid';
import Keyboard from './Keyboard/Keyboard';
function Body() {
  return (
    <React.Fragment>
        <div className="grid">
          <Grid />
        </div>
        <div className="keyboard">
          <Keyboard />
        </div>
    </React.Fragment>
  )
}

export default Body
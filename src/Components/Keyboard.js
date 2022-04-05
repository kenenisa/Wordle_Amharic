import React from "react";
import "../Styles/keyboard_Styles.css";

function Keyboard() {
  return (
    <div className="keyboard">
      <div className="keyboard first_row">
        <div className="keys">Q</div>
        <div className="keys">W</div>
        <div className="keys">E</div>
        <div className="keys">R</div>
        <div className="keys">T</div>
        <div className="keys">Y</div>
        <div className="keys">U</div>
        <div className="keys">I</div>
        <div className="keys">O</div>
        <div className="keys">P</div>
      </div>
      <div className=" keyboard second_row">
        <div className="keys">A</div>
        <div className="keys">S</div>
        <div className="keys">D</div>
        <div className="keys">F</div>
        <div className="keys">G</div>
        <div className="keys">H</div>
        <div className="keys">J</div>
        <div className="keys">K</div>
        <div className="keys">L</div>
      </div>
      <div className="keyboard third_row">
        <div className="keys">Enter</div>
        <div className="keys">Z</div>
        <div className="keys">X</div>
        <div className="keys">C</div>
        <div className="keys">V</div>
        <div className="keys">B</div>
        <div className="keys">N</div>
        <div className="keys">M</div>
        <div className="keys">bksps</div>
      </div>
    </div>
  );
}

export default Keyboard;

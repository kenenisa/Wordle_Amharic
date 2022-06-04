import React from "react";
import "./Toggle.css";

function Toggle() {
  return (
    <div>
      <div class="button b2" id="button-11">
        <input type="checkbox" class="checkbox" />
        <div class="knobs">
          <span></span>
        </div>
        <div class="layer"></div>
      </div>
    </div>
  );
}

export default Toggle;

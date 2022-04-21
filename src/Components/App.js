import React from "react";
import "./App.css";
import Body from "./Body/Body";
// import ProgressBar from "./Body/Modal/ProgressBar/ProgressBar";
function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>ወርድል</h3>
      </div>
      <div className="body">
        <Body />
        {/* <ProgressBar /> */}
      </div>
    </div>
  );
}

export default App;

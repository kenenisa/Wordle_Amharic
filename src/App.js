import "./App.css";
import Grid from "./Components/Grid";
import Keyboard from "./Components/Keyboard";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>ወርድል</h3>
      </div>
      <div className="body">
        <div className="grid">
          <Grid />
        </div>
        <div className="keyboard">
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;

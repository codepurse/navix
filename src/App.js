import "./App.css";
import "./lib/components/styles/main.scss";
import Tooltip from "./lib/components/tooltip/tooltip";
function App() {
  return (
    <div style={{ width: "800px" }}>
      <Tooltip content="Testasdasdasdsad" direction="left" alwaysOpen>
        <p>Sample tooltiasdasdasdasdasdasdsap</p>
        <p>Sample tooltiasdasdasdasdasdasdsap</p>
      </Tooltip>
    </div>
  );
}

export default App;

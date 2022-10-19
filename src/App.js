import "./App.css";
import Badge from "./lib/components/badge/badge";
import "./lib/components/styles/main.scss";
function App() {
  return (
    <>
      <div style={{ width: "800px" }}>
        <Badge type="danger">Neutral</Badge>
      </div>
    </>
  );
}

export default App;

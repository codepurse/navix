import "./App.css";
import Button from "./lib/components/button/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <Button fill>test</Button>
    </div>
  );
}

export default App;

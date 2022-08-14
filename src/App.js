import "./App.css";
import "./lib/components/styles/main.scss";
import Text from "./lib/components/text/text";
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
      <Text placeholder="test" fill alignText="right" onlyNuber></Text>
    </div>
  );
}

export default App;

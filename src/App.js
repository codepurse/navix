import "./App.css";
import Box from "./lib/components/box/box";
import "./lib/components/styles/main.scss";
function App() {
  return (
    <div style={{ width: "800px" }}>
      <Box w="400px" h="400px" background="green" mt="100px"></Box>
    </div>
  );
}

export default App;

import "./App.css";
import { Alert, AlertContainer } from "./lib";
import "./lib/components/styles/main.scss";
function App() {
  const notify = () => Alert.success("Change applied succesfully");
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
      <button onClick={notify}>test</button>
      <AlertContainer
        options={{
          position: "top-center",
          progress: "false",
        }}
      />
    </div>
  );
}

export default App;

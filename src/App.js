import "./App.css";
import { Alert, default as AlertContainer } from "./lib/components/alert/alert";
import "./lib/components/styles/main.scss";

function App() {
  const notify = () => Alert.success("Sample Alert! Letss goo!");
  return (
    <>
      <div
        style={{ width: "800px", height: "500px" }}
        onClick={(e) => notify()}
      ></div>
      <AlertContainer />
    </>
  );
}

export default App;

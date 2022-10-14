import { BiSearchAlt2 } from "react-icons/bi";
import "./App.css";
import { Alert, default as AlertContainer } from "./lib/components/alert/alert";
import "./lib/components/styles/main.scss";
import Textbox from "./lib/components/text/textbox";
function App() {
  const notify = () => Alert.success("Sample Alert! Letss goo!");
  return (
    <>
      <AlertContainer />
      <div
        style={{ width: "800px", height: "500px" }}
        onClick={(e) => notify()}
      >
        <Textbox
          size="md"
          fill
          type="text"
          placeholder="test place"
          iconLeft={<BiSearchAlt2 />}
          styleLeftIcon={{ color: "red" }}
          styleRighttIcon={{ color: "red" }}
          onChange={(e) => {
            console.log(e.currentTarget.value);
          }}
        />
      </div>
    </>
  );
}

export default App;

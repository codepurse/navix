import "./App.css";
import Button from "./lib/components/button/Button";
import Checkbox from "./lib/components/checkbox/checkbox";
import NavixProvider from "./lib/components/navixProvider/navixProvider";
import "./lib/components/styles/main.scss";
function App() {
  /*   const themes = {
    "blue-600": "#424242",
    "dark2-600": "#424242",
  };
  useOverrRuleTheme(themes); */

  return (
    <>
      <div style={{ width: "800px" }}>
        <NavixProvider theme="dark">
          <Button type="primary" size="sm">
            Button
          </Button>
          <Checkbox />
        </NavixProvider>
      </div>
    </>
  );
}

export default App;

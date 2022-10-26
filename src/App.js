import { useState } from "react";
import "./App.css";
import Divider from "./lib/components/divider/divider";
import "./lib/components/styles/main.scss";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="vertical-center" style={{ height: "100vh" }}>
        <Divider size="xs" orientation={"vertical"} type="solid" />
      </div>
    </>
  );
}

export default App;

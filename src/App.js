import { useState } from "react";
import "./App.css";
import Button from "./lib/components/button/Button";
import Drawer from "./lib/components/drawer/drawer";
import "./lib/components/styles/main.scss";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="vertical-center">
        <Button
          type="primary"
          onClick={(e) => {
            setShow((prev) => !prev);
          }}
        >
          Open
        </Button>
      </div>
      <Drawer
        show={show}
        overlayOpacity={0.5}
        overlayBlur={0}
        size="sm"
        position="left"
        onClose={(e) => {
          setShow(false);
        }}
      >
        <p>test</p>
      </Drawer>
    </>
  );
}

export default App;

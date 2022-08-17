import { useState } from "react";
import "./App.css";
import Radio from "./lib/components/radio/radio";
import RadioGroup from "./lib/components/radio/radioGroup";
import "./lib/components/styles/main.scss";
function App() {
  const [num, setNum] = useState("3");
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
      <button
        onClick={(e) => {
          setNum("2");
        }}
      >
        test
      </button>
      <RadioGroup defaultCheck={num} onChange={(e, value) => {}}>
        <Radio value="1" label="Male 2" />
        <Radio value="2" label="Male 1" />
        <Radio value="3" label="Male 1" />
      </RadioGroup>
    </div>
  );
}

export default App;

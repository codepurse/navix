import "./App.css";
import Radio from "./lib/components/radio/radio";
import RadioGroup from "./lib/components/radio/radioGroup";
import Space from "./lib/components/space/space";
import "./lib/components/styles/main.scss";
function App() {
  const segmentedArray = [
    {
      id: "one",
      label: "Button One",
    },
    {
      id: "two",
      label: "Button Two",
    },
    {
      id: "three",
      label: "Button Three",
    },
  ];

  return (
    <div style={{ width: "800px" }}>
      <Space gap={10} direction="column">
        <RadioGroup>
          <Radio value="1"></Radio>
          <Radio value="2"></Radio>
        </RadioGroup>
      </Space>
    </div>
  );
}

export default App;

import "./App.css";
import Steps from "./lib/components/steps/step";
import StepsList from "./lib/components/steps/stepsList";
import "./lib/components/styles/main.scss";
function App() {
  return (
    <div style={{ width: "800px" }}>
      <Steps
        bgColorActive="tomato"
        colorActive="#424242"
        withNum
        borderColorActive="tomato"
        selected={2}
        withAnimation={false}
      >
        <StepsList label="Test 1"></StepsList>
        <StepsList></StepsList>
        <StepsList></StepsList>
      </Steps>
    </div>
  );
}

export default App;

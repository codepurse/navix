import "./App.css";
import Badge from "./lib/components/badge/badge";
import Button from "./lib/components/button/Button";
import "./lib/components/styles/main.scss";
function App() {
  return (
    <>
      <div style={{ width: "800px" }}>
        <Button type="primary" style={{ position: "relative" }}>
          Profile{" "}
          <Badge
            type="info"
            size="sm"
            position={"top-right"}
            onClick={(e) => {
              console.log("test");
            }}
          >
            top
          </Badge>
        </Button>
      </div>
    </>
  );
}

export default App;

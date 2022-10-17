import "./App.css";
import Box from "./lib/components/box/box";
import Button from "./lib/components/button/Button";
import Checkbox from "./lib/components/checkbox/checkbox";
import Overlay from "./lib/components/overlay/overlay";
import "./lib/components/styles/main.scss";
import TabContent from "./lib/components/tabs/tabContent";
import TabHeader from "./lib/components/tabs/tabHeader";
import Tabs from "./lib/components/tabs/tabs";
import Textbox from "./lib/components/text/textbox";
function App() {
  return (
    <>
      <div style={{ width: "800px" }}>
        <Overlay
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
          rendered={
            <Tabs defaultKey="3" mb="0">
              <TabHeader label="Tab One" id="3"></TabHeader>
              <TabHeader label="Tab Two" id="4"></TabHeader>
              <TabContent id="3">
                <Textbox fill placeholder="Search here.."></Textbox>
                <Box mt="15px">
                  <Checkbox label="Textbook"></Checkbox>
                </Box>
                <Box mt="15px">
                  <Checkbox label="Learning application"></Checkbox>
                </Box>
                <Box mt="15px">
                  <Checkbox label="Additonal material"></Checkbox>
                </Box>
                <Box mt="15px">
                  <Checkbox label="No type set"></Checkbox>
                </Box>
              </TabContent>
              <TabContent id="4">
                <p style={{ fontSize: "2rem" }}> 😆 </p>
              </TabContent>
            </Tabs>
          }
        >
          <Button>Add filter</Button>
        </Overlay>
      </div>
    </>
  );
}

export default App;

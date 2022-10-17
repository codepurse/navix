import { MdSort } from "react-icons/md";
import "./App.css";
import Checkbox from "./lib/components/checkbox/checkbox";
import Overlay from "./lib/components/overlay/overlay";
import Space from "./lib/components/space/space";
import "./lib/components/styles/main.scss";
import TabContent from "./lib/components/tabs/tabContent";
import TabHeader from "./lib/components/tabs/tabHeader";
import Tabs from "./lib/components/tabs/tabs";
function App() {
  const columns = [
    {
      key: "bank",
      headerName: () => (
        <Space gap={10}>
          <p>Header Name</p>
          <Overlay
            rendered={
              <div className="sampleOverlay">
                <Space gap={10} direction="column">
                  <Checkbox label="Test" positionLabel="right"></Checkbox>
                  <Checkbox label="Test" positionLabel="right"></Checkbox>
                </Space>
              </div>
            }
          >
            <i>
              <MdSort />
            </i>
          </Overlay>
        </Space>
      ),
    },
    {
      key: "suitability",
      headerName: "Suitability",
    },
    {
      key: "customer",
      headerName: "Customer",
    },
    {
      key: "volume",
      headerName: "Credit Volume",
    },
    {
      key: "action",
      headerName: "",
    },
  ];

  const data = [
    {
      bank: "Anz Banking",
      suitability: "Pairing",
      customer: "Michael Polansky",
      volume: "$300,000.00",
    },
    {
      bank: "Axis Bank",
      suitability: "Fragmentary",
      customer: "David Hoffman",
      volume: "$500,000.00",
    },
    {
      bank: "ING Group",
      suitability: "Pairing",
      customer: "Helen Howard",
      volume: "$100,000.00",
    },
  ];

  return (
    <>
      <div style={{ width: "800px" }}>
        <Tabs defaultKey="3" mb="0">
          <TabHeader label="Tab One" id="3"></TabHeader>
          <TabHeader label="Tab Two" id="4"></TabHeader>
          <TabContent id="3"></TabContent>
          <TabContent id="4"></TabContent>
        </Tabs>
      </div>
    </>
  );
}

export default App;

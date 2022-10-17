import { MdSort } from "react-icons/md";
import "./App.css";
import Checkbox from "./lib/components/checkbox/checkbox";
import Overlay from "./lib/components/overlay/overlay";
import Space from "./lib/components/space/space";
import "./lib/components/styles/main.scss";
import Table from "./lib/components/table/table";
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
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;

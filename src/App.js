import "./App.css";
import "./lib/components/styles/main.scss";
import Table from "./lib/components/table/table";
function App() {
  const columns = [
    {
      key: "bank",
      headerName: "Bank",
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
    <div style={{ width: "800px" }}>
      <Table columns={columns} data={data} isLoading />
    </div>
  );
}

export default App;

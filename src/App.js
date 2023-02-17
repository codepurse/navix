import { useState } from "react";
import "./App.css";
import { ButtonIcon, Space, Table } from "./lib";
import Divider from "./lib/components/divider/divider";
import "./lib/components/styles/main.scss";
function App() {
  const [show, setShow] = useState(false);

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
      headerName: "Credit Volume3 213 213 21 321 321 321 3 12",
    },
    {
      key: "test1",
      headerName: "Credit Volume Test 1eqw eqw eqw eqw eqw eqw e qw",
    },
    {
      key: "test2",
      headerName: "Credit Volume test 2 asfd asd asd asd asd a ",
    },
    {
      key: "test3",
      headerName: "Credit Volume test 3 rwq eq weq we qwe ",
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
      test1: "$300,000.00",
      test2: "$300,000.00",
      test3: "$300,000.00",
    },
    {
      bank: "Axis Bank",
      suitability: "Fragmentary",
      customer: "David Hoffman",
      volume: "$500,000.00",
      test1: "$300,000.00",
      test2: "$300,000.00",
      test3: "$300,000.00",
    },
    {
      bank: "ING Group",
      suitability: "Pairing",
      customer: "Helen Howard",
      volume: "$100,000.00",
      test1: "$300,000.00",
      test2: "$300,000.00",
      test3: "$300,000.00",
      action: () => (
        <Space gap={5}>
          <ButtonIcon variant={"delete"} />
          <ButtonIcon variant="edit" />
        </Space>
      ),
    },
  ];

  const defaultActions = [
    {
      type: "delete",
      title: "Delete Time Entry",
      onClick: (e, data) => {
        alert(`${data.bank} is the bank, delete is the action`);
      },
    },
    {
      type: "edit",
      title: "Edit Time Entry",
      onClick: (e, data) => {
        alert(`${data.bank} is the bank, edit is the action`);
      },
    },
    {
      type: "view",
      title: "View Time Entry",
      onClick: (e, data) => {
        alert(`${data.bank} is the bank, view is the action`);
      },
    },
  ];

  return (
    <>
      <div className="vertical-center" style={{ height: "100vh" }}>
        <Table columns={columns} data={data} defaultActions={defaultActions} />
      </div>
    </>
  );
}

export default App;

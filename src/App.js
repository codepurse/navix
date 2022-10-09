import { useState } from "react";
import "./App.css";
import Avatar from "./lib/components/avatar/avatar";
import ButtonIcon from "./lib/components/buttonIcon/ButtonIcon";
import Space from "./lib/components/space/space";
import "./lib/components/styles/main.scss";
import TableNvx from "./lib/components/table/table";
function App() {
  const [bank, setBank] = useState("");

  const handleDel = () => {
    console.log(bank);
  };

  const [data, setData] = useState([
    {
      bank: (text) => (
        <Space gap={20}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27EZ3l_Icj1cn6eOFiSs6prbY-ZFRsCfUdA&usqp=CAU" />
          <div>
            <p style={{ marginBottom: "5px" }}>Gandalf</p>
            <label>White wizard</label>
          </div>
        </Space>
      ),
      suitability: "Mair",
      customer: "White Staff",
      volume: "Undying Lands",
      action: (text) => (
        <Space gap={5}>
          <ButtonIcon variant={"delete"} />
          <ButtonIcon variant="edit" />
        </Space>
      ),
    },
    {
      bank: (text) => (
        <Space gap={20}>
          <Avatar src="https://i0.wp.com/www.tor.com/wp-content/uploads/2019/04/glorfindel.jpg?fit=721%2C+9999&crop=0%2C0%2C100%2C1108px&ssl=1&w=640" />
          <div>
            <p style={{ marginBottom: "5px" }}>Glorifindel</p>
            <label>Spiritual Warrior</label>
          </div>
        </Space>
      ),
      suitability: "Elves",
      customer: "Sword or Dirk",
      volume: "House of Golden Flower",
      action: (text) => (
        <Space gap={5}>
          <ButtonIcon variant={"delete"} />
          <ButtonIcon variant="edit" />
        </Space>
      ),
    },
    {
      bank: (text) => (
        <Space gap={20}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnnswetwI68MneXDMmYe9U3RjSEZWywKD7A&usqp=CAU" />
          <div>
            <p style={{ marginBottom: "5px" }}>Aragorn</p>
            <label>King of Gondor</label>
          </div>
        </Space>
      ),
      suitability: "Man",
      customer: "Anduril",
      volume: "Middle Earth",
      action: (text) => (
        <Space gap={5}>
          <ButtonIcon variant={"delete"} />
          <ButtonIcon variant="edit" />
        </Space>
      ),
    },

    {
      bank: (text) => (
        <Space gap={20}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTOBnH7quMdA5sKg21ISDBdHIS_wwrIwNKg&usqp=CAU" />
          <div>
            <p style={{ marginBottom: "5px" }}>Galadriel </p>
            <label>Queen of Elves</label>
          </div>
        </Space>
      ),
      name: "Galadriel",
      suitability: "Elves",
      customer: "Ring of Nenya",
      volume: "Riverdell",
      action: (text) => (
        <Space gap={5}>
          <ButtonIcon
            variant={"delete"}
            onClick={(e) => {
              alert("Are you sure you want to delete " + text.data.name);
            }}
          />
          <ButtonIcon variant="edit" />
        </Space>
      ),
    },
  ]);
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

  const handleRemove = (id) => {
    const newPeople = data.filter((person) => person.bank !== id);

    setData(newPeople);
  };

  const styleComponents = `
    th {
      padding: 15px 10px !important;
      padding-bottom: 20px !important;
    }
    tr {
      transition: all 0.2s;
    }
  
    tr:hover {
      background: #F5F5F5 !important;
    }`;

  return (
    <div style={{ width: "800px" }}>
      <TableNvx
        columns={columns}
        className="testTable"
        emptyText
        styleComponents={styleComponents}
        data={data}
        _onHoverRowStyle
        /*  style={{ borderColor: "tomato" }} */
        rowClick={(e) => {
          /*   console.log(e); */
        }}
      />
    </div>
  );
}

export default App;

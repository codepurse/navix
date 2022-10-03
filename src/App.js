import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AlertContainer,
  Box,
  Checkbox,
  List,
  ListItem,
  Overlay,
  Pagination,
  Paragraph,
  Pin,
  SegmentedButton,
  Space,
  Steps,
  StepsList,
  Switch,
  TabContent,
  TabHeader,
  Table,
  Tabs,
  TblData,
  Tooltip,
  useArray,
  useToggle,
} from "./lib";
import Avatar from "./lib/components/avatar/avatar";
import AvatarBatch from "./lib/components/avatar/avatarBatch";
import Badge from "./lib/components/badge/badge";
import Button from "./lib/components/button/Button";
import ButtonIcon from "./lib/components/buttonIcon/ButtonIcon";
import Header from "./lib/components/header/Header";
import Radio from "./lib/components/radio/radio";
import RadioGroup from "./lib/components/radio/radioGroup";
import "./lib/components/styles/main.scss";
import Textbox from "./lib/components/text/textbox";
function App() {
  const [show, setShow] = useToggle(true);
  const [check, setCheck] = useState(false);
  const [id, setId] = useState();
  const segmentedArray = [
    {
      id: "one",
      label: "Button One",
      disabled: true,
    },
    {
      id: "two",
      label: "Button Two",
    },
    {
      id: "three",
      label: "Button Threeasd asd asd asd asdasdasdsadasdas asd ",
    },
  ];

  const numArray = [1, 2, 3, 4, 5, 6, 7];

  const testArray = useArray(numArray);

  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }

  useEffect(
    (e) => {
      console.log(id);
    },
    [id]
  );

  return (
    <div>
      <Header style={{ textAlign: "center" }}>asdasd</Header>
      <p>test</p>
      <AlertContainer />
      <Button disabled>Set cookie</Button>
      <Button type="primary" category="default">
        Delete
      </Button>
      <Button type="cancel" category="solid">
        None
      </Button>
      <Button
        type="cancel"
        onClick={(e) => {
          setShow();
        }}
      >
        Log
      </Button>
      <Textbox iconLeft={<FiSearch />} iconRight={<FiSearch />} />
      <RadioGroup defaultCheck="1">
        <Radio value="1" label="Asds" />
        <Radio value="2" label="Asds" />
      </RadioGroup>
      <AvatarBatch max="2">
        <Avatar
          label="Seulgi labadan"
          src="https://i.pinimg.com/originals/7d/3b/9d/7d3b9da836ea9044474eeb5d5971bf85.jpg"
        ></Avatar>
        <Avatar src="https://www.pinkvilla.com/files/when-red-velvets-seulgi-opened-up-about-her-thoughts-on-debuting-sub-unit.jpg"></Avatar>
        <Avatar src="http://pm1.narvii.com/6989/1aa8099ea958d8f9feead69ec561f43c0708c4f0r1-638-957v2_uhq.jpg"></Avatar>
        <Avatar src="https://www.pinkvilla.com/files/when-red-velvets-seulgi-opened-up-about-her-thoughts-on-debuting-sub-unit.jpg"></Avatar>
      </AvatarBatch>
      <div
        style={{
          maxWidth: "100px",
          margin: "15px",
        }}
      >
        <Paragraph style={{ textAlign: "center" }}>
          adadasdsaasdsadsadasdasdsadasdas asd asd asd asd asdas das dsa dasd
          asd asd
        </Paragraph>
      </div>
      <Badge type="primary">Primary</Badge>
      <Overlay>
        <div>
          <Badge type="danger">Error</Badge>
        </div>
      </Overlay>
      <Overlay
        position="top"
        rendered={
          <div className="test">
            <p>test</p>
          </div>
        }
      >
        <Button
          type="cancel"
          onClick={(e) => {
            setShow();
          }}
        >
          Log
        </Button>
      </Overlay>
      <Accordion space="separeted">
        <AccordionItem
          wrapperStyle={{ backgroundColor: "#212121", borderRadius: "25px" }}
          style={{ color: "white" }}
          title="Accordion One"
        >
          <AccordionContent>
            <div className="divSampleAcc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          wrapperStyle={{ backgroundColor: "#212121", borderRadius: "25px" }}
          style={{ color: "white" }}
          title="Accordion Two"
        >
          <AccordionContent>
            <div className="divSampleAcc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion space="separeted">
        <AccordionItem
          title="Accordion One"
          alignIcon={"left"}
          wrapperStyle={{
            backgroundColor: "#fff6ee",
            borderRadius: "5px",
            borderLeft: "5px solid #ffc48b",
          }}
        >
          <AccordionContent>
            <div className="divSampleAcc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          alignIcon={"left"}
          title="Accordion Two"
          wrapperStyle={{
            backgroundColor: "#fafaff",
            borderRadius: "5px",
            borderLeft: "5px solid #84b3ff",
          }}
        >
          <AccordionContent>
            <div className="divSampleAcc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={(e) => {
            setCheck((prev) => !prev);
          }}
        >
          casdad
        </button>
        <Switch
          backgroundColor={"green"}
          checkedCaretColor="tomato"
          checkedBgColor="black"
          leftLabel="test"
          rightLabel="test"
          topLabel="test"
          onChange={(e) => {
            console.log(e);
          }}
          bottomLabel="test"
        />
      </div>
      <List>
        <ListItem
          label="Landing page design"
          subLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          renderIcon={<AiFillCheckCircle />}
        >
          <p>test</p>
        </ListItem>
        <ListItem
          label="Brand guidelines"
          subLabel="Ut enim ad minim veniam, quis nostrud exercitation ullamc asdas das das
           das 
           asd as
           d asd 
           asdsadasdasd asd 
           asd aso"
        ></ListItem>
        <ListItem>
          <div>test</div>
        </ListItem>
      </List>
      <Pagination
        totalRecords={100}
        pageLimit={5}
        initialPage={1}
        pagesToShow={5}
        onChangePage={(e) => {
          console.log(e);
        }}
      ></Pagination>
      <SegmentedButton
        wrapperStyle={{ backgroundColor: "#212121", color: "white" }}
        className="test"
        id="test"
        value={segmentedArray}
        disabled
        elipsis
        fill={false}
        onClick={(e) => {
          console.log("wew");
        }}
        onActive={{ backgroundColor: "tomato" }}
        selected={2}
        onSelect={(e) => {
          console.log(e);
          setId(e);
        }}
      />
      <Overlay>
        <Box
          style={{ height: "100px", width: "100px" }}
          backgroundColor="tomato"
        ></Box>
      </Overlay>
      <Tooltip content="Yee-haw!" direction="right">
        <div style={{ marginTop: "10px" }}>
          <ButtonIcon variant="notes" size={"sm"} />
        </div>
      </Tooltip>
      <div style={{ width: "300px", height: "155px" }}>
        <Pin hidden inputType="number" animated={false}></Pin>
      </div>
      <Tabs defaultKey="3" variant={"borderline"}>
        <TabHeader label="Tab One" id="3"></TabHeader>
        <TabHeader label="Tab Two" id="4"></TabHeader>
        <TabContent id="3">
          <Paragraph style={{ marginLeft: "25px" }}>🤩</Paragraph>
        </TabContent>
        <TabContent id="4">
          <Paragraph style={{ marginLeft: "25px" }}>😁</Paragraph>
        </TabContent>
      </Tabs>
      <div>
        <Table>
          <TblData>test</TblData>
        </Table>
      </div>
      <Space direction="row" gap={10} align="evenly">
        <ButtonIcon
          variant="notes"
          size={"lg"}
          rounded
          disabled
          onClick={(e) => {
            console.log("ttest");
          }}
        />
        <ButtonIcon variant="notes" size={"sm"} rounded />
        <ButtonIcon variant="notes" size={"sm"} />
      </Space>
      <Steps withNum selected={2}>
        <StepsList />
        <StepsList />
        <StepsList />
      </Steps>
      <Checkbox label="Test Checbox" error />
      <Checkbox label="Test Checbox" checked />
      <div style={{ marginTop: "20px" }}>
        <Paragraph
          disabled
          fontSize="xxl"
          underline
          onClick={(e) => {
            console.log("test");
          }}
          required
          className="testP"
        >
          test
        </Paragraph>
      </div>
    </div>
  );
}

export default App;

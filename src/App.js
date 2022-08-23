import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  Alert,
  AlertContainer,
  Box,
  List,
  ListItem,
  Pagination,
  Paragraph,
  Pin,
  SegmentedButton,
  Switch,
  TabContent,
  TabHeader,
  Tabs,
  Tooltip,
  useArray,
  useCookie,
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
  const [num, setNum] = useState("3");
  const [count, setCount] = useState(1);
  const notify = () => Alert.info("Sample Alert! Letss goo!");
  const segmentedArray = [
    {
      id: "one",
      label: "Button One",
    },
    {
      id: "two",
      label: "Button Two",
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

  return (
    <div>
      <Header style={{ textAlign: "center" }}>asdasd</Header>
      <p>test</p>
      <AlertContainer />
      <Button
        onClick={(e) => {
          document.cookie = "username=John Doe";
          testArray.push(8);
        }}
      >
        Set cookie
      </Button>
      <Button
        onClick={(e) => {
          console.log(testArray);
          useCookie.clear("username");
        }}
      >
        Delete
      </Button>
      <Button
        onClick={(e) => {
          console.log(getCookie("username"));
        }}
      >
        Log
      </Button>
      <Textbox></Textbox>
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
      <Paragraph style={{ textAlign: "center" }}>adadasdsa</Paragraph>
      <Badge type="primary">Primary</Badge>
      <Badge type="danger">Error</Badge>
      <Accordion>
        <AccordionItem title="Accordion One">
          <AccordionContent>
            <p>Test One</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem title="Accordion Two">
          <AccordionContent>
            <p>Test Two</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <span>asdsa</span>
        <Switch />
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
      <Pagination />
      <SegmentedButton
        value={segmentedArray}
        selected={2}
        onSelect={(e) => {
          console.log(e);
        }}
      />
      <Tooltip content="Yee-haw!" direction="right">
        <Box
          style={{ height: "100px", width: "100px" }}
          backgroundColor="tomato"
        ></Box>
      </Tooltip>
      <Tooltip content="Yee-haw!" direction="right">
        <div style={{ marginTop: "10px" }}>
          <ButtonIcon variant="notes" size={"sm"} />
        </div>
      </Tooltip>
      <div style={{ width: "300px", height: "155px" }}>
        <Pin
          spacing={30}
          count={4}
          onChange={(e) => {
            console.log(e);
          }}
        ></Pin>
      </div>
      <Tabs defaultKey="3">
        <TabHeader label="Tab One" id="3"></TabHeader>
        <TabHeader label="Tab Two" id="4"></TabHeader>
        <TabContent id="3">
          <Paragraph style={{ marginLeft: "25px" }}>🤩</Paragraph>
        </TabContent>
        <TabContent id="4">
          <Paragraph style={{ marginLeft: "25px" }}>😁</Paragraph>
        </TabContent>
      </Tabs>
    </div>
  );
}

export default App;

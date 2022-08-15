import "./App.css";
import Avatar from "./lib/components/avatar/avatar";
import AvatarBatch from "./lib/components/avatar/avatarBatch";
import Badge from "./lib/components/badge/badge";
import Checkbox from "./lib/components/checkbox/checkbox";
import CircularLoader from "./lib/components/circularProgress/CircularProgress";
import Header from "./lib/components/header/Header";
import Paragraph from "./lib/components/paragraph/paragraph";
import "./lib/components/styles/main.scss";
import TabsContent from "./lib/components/tabs/tabContent";
import TabsHeader from "./lib/components/tabs/tabHeader";
import Tabs from "./lib/components/tabs/tabs";
import Textbox from "./lib/components/text/textbox";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <Textbox placeholder="test" fill alignText="right" onlyNuber />
      <Checkbox label="test"></Checkbox>
      <AvatarBatch max="1">
        <Avatar
          label="Krean Tesd"
          src="https://wiki.d-addicts.com/images/f/f9/Seulgi.jpg"
        />
        <Avatar
          label="Krean Tesd"
          src="https://wiki.d-addicts.c2om/images/f/f9/Seulgi.jpg"
        />
      </AvatarBatch>
      <Tabs>
        <TabsHeader label="Component one" id="1"></TabsHeader>
        <TabsHeader label="Component Two" id="2"></TabsHeader>
        <TabsContent id="1">Component One</TabsContent>
        <TabsContent id="2">Component Two</TabsContent>
      </Tabs>
      <CircularLoader size="md" speed="fast" strokeWidth={5} />
      <Header type={1} color="red" showLineNo={1} underline italic>
        Navix Headerasdas asd asdas dsa dsadasdas asdas dasd as as as sad
      </Header>
      <Header type={2}>Navix Header</Header>
      <Header type={3}>Navix Header</Header>
      <Header type={4}>Navix Header</Header>
      <Header>Navix Header</Header>
      <Paragraph renderAs="b">
        Navix Paragraphasdas asd asd asd asd asdas as sad asd asd asd asd asd
        asd asd asd as
      </Paragraph>
      <Badge type="success" padding="10px">
        Primary
      </Badge>
    </div>
  );
}

export default App;

import "./App.css";
import Accordion from "./lib/components/accordion/accordion";
import AccordionContent from "./lib/components/accordion/accordionContent";
import AccordionItem from "./lib/components/accordion/accordionItem";
import Avatar from "./lib/components/avatar/avatar";
import Badge from "./lib/components/badge/badge";
import Box from "./lib/components/box/box";
import Space from "./lib/components/space/space";
import "./lib/components/styles/main.scss";
import Timeline from "./lib/components/timeline/timeline";
function App() {
  const timelineRight = [
    {
      rightContent: "asdasasdasdasds aadsadsadsadasdd",
      _dotStyle: { backgroundColor: "blue" },
      _lineStyle: { backgroundColor: "blue" },
    },
    {
      rightContent: "asdasasdasdasdds",
    },
  ];
  const timelineLeft = [
    {
      leftContent: "asdasasdasdasdsa asdsadsadsadasdd",
    },
    {
      leftContent: "asdasasdasdasdds",
    },
  ];
  const timelineAlternate = [
    {
      leftContent: "asdasasdasd asdasdsadsadsadsadasdd",
    },
    {
      rightContent: "asdasasdasdasdds",
    },
    {
      leftContent: "asdasasdasdasdds",
    },
    {
      rightContent: "asdasasdasdasdds",
    },
  ];
  const timelineCustom = [
    {
      _dotStyle: { backgroundColor: "#0095ff" },
      rightContent: (
        <div>
          <Space gap={20}>
            <Avatar
              size="sm"
              label="Seulgi labadan"
              src="https://i.pinimg.com/originals/7d/3b/9d/7d3b9da836ea9044474eeb5d5971bf85.jpg"
            ></Avatar>
            <p p className="pName">
              Nicolas Sharp <span>created a task.</span>
            </p>
          </Space>
        </div>
      ),
      leftContent: "January 20 2021",
    },

    {
      _dotStyle: { backgroundColor: "#00ACC1" },
      leftContent: "January 21 2021",
      rightContent: (
        <>
          <Space gap={20}>
            <Avatar
              size="sm"
              label="Seulgi labadan"
              src="https://i.pinimg.com/originals/7d/3b/9d/7d3b9da836ea9044474eeb5d5971bf85.jpg"
            ></Avatar>
            <p className="pName">
              Julia Christie{" "}
              <span>has changed 2 attributes on Jan 21, 2022</span>
            </p>
          </Space>
          <div className="divSampleTime">
            <p className="pDesc">
              A long-term client, Jung Ji Ho has been using Sang Eun’s services
              every Monday, Wednesday, and Friday, for the past five years. A
              man shrouded in mystery, Sang Eun knows virtually nothing about Ji
              Ho but that doesn’t stop her from developing some rather
              unexpected feelings for him. 😛
            </p>
            <div style={{ marginTop: "10px" }}>
              <Space gap={8}>
                <Badge type="info" size="sm">
                  Contract
                </Badge>
                <Badge type="warning" size="sm">
                  Follow up
                </Badge>
              </Space>
            </div>
          </div>
        </>
      ),
    },
    {
      _dotStyle: { backgroundColor: "#F44336", width: "25px", height: "25px" },
      leftContent: "January 22 2021",
      rightContent: (
        <>
          {" "}
          <Space gap={20}>
            <Avatar
              size="sm"
              label="Seulgi labadan"
              src="https://i.pinimg.com/originals/7d/3b/9d/7d3b9da836ea9044474eeb5d5971bf85.jpg"
            ></Avatar>
            <p className="pName">
              Julia Christie <span>created a list.</span>
            </p>
          </Space>
          <div className="divSampleTime">
            <p className="pDesc">
              I integrated a example accordion below! 🥳🤩
            </p>
            <Box mt="15px">
              <Accordion space="separeted">
                <AccordionItem
                  title="Accordion One"
                  wrapperStyle={{
                    backgroundColor: "#fff6ee",
                    borderRadius: "5px",
                    borderLeft: "5px solid #ffc48b",
                  }}
                >
                  <AccordionContent>
                    <div className="divSampleAccordion">
                      <p>Accordion one</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  title="Accordion Two"
                  wrapperStyle={{
                    backgroundColor: "#fff6ee",
                    borderRadius: "5px",
                    borderLeft: "5px solid #ffc48b",
                  }}
                >
                  <AccordionContent>
                    <div className="divSampleAccordion">
                      <p>Accordion two</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Box>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <p style={{ margin: "20px" }}>Right example</p>
        <Timeline data={timelineRight} />
        <p style={{ margin: "20px" }}>Left example</p>
        <Timeline data={timelineLeft} />
        <p style={{ margin: "20px" }}>Alternate example</p>
        <Timeline data={timelineAlternate} />
        <p style={{ margin: "20px" }}>Custom example</p>
        <Timeline data={timelineCustom} />
      </div>
    </>
  );
}

export default App;

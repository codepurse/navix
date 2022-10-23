import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import Box from "../box/box";

Timeline.propTypes = {
  data: PropTypes.array,
};

Timeline.defaultProps = {
  data: [],
};

export default function Timeline(props) {
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  useEffect((e) => {
    try {
      setLeft(JSON.stringify(props.data).includes("leftContent"));
      setRight(JSON.stringify(props.data).includes("rightContent"));
    } catch (error) {}
  }, []);
  return (
    <Box className="nvxTimeline">
      {props.data.map((data, index, { length }) => (
        <Box className="nvxTimelineRow">
          {left ? (
            <Box className="nvxTimelineColumn">
              {data.leftContent ? (
                <Box className="nvxTimelineItem nvxTimelineLeft">
                  {data.leftContent}
                </Box>
              ) : null}
            </Box>
          ) : null}

          <Box
            className="nvxTimelineColumn"
            style={{ maxWidth: "max-content" }}
          >
            {index + 1 === length ? null : (
              <Box className="nvxTimelineLine" style={data?._lineStyle}></Box>
            )}
            <Box className="nvxTimelineCircle" style={data?._dotStyle}></Box>
          </Box>

          {right ? (
            <Box className="nvxTimelineColumn">
              {data.rightContent ? (
                <Box
                  className="nvxTimelineItem"
                  style={index + 1 === length ? { paddingBottom: "0px" } : {}}
                >
                  {data.rightContent}
                </Box>
              ) : null}
            </Box>
          ) : null}
        </Box>
      ))}
    </Box>
  );
}

import { PropTypes } from "prop-types";
import React from "react";
import { spaceAlign } from "./spaceFunction";

const SPACE_DIRECTION = ["row", "column"];
const SPACE_ALIGN = ["end", "center", "start", "between", "evenly"];

Space.propTypes = {
  direction: PropTypes.oneOf(SPACE_DIRECTION),
  gap: PropTypes.number,
  align: PropTypes.oneOf(SPACE_ALIGN),
  fill: PropTypes.bool,
};

Space.defaultProps = {
  direction: "row",
};
export default function Space(props) {
  const propsStyle = {
    flexDirection: props.direction,
    justifyContent: spaceAlign(props.align),
    display: "flex",
    gap: props.gap + "px",
    width: props.fill ? "100%" : "",
  };
  return <div style={propsStyle}>{props.children}</div>;
}

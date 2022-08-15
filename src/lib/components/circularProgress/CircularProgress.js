import { PropTypes } from "prop-types";
import React from "react";
import { circleSize, circleSpeed } from "./circularFunction";

const CIRCULAR_SIZES = ["sm", "md", "lg", "xl"];

const CIRCULAR_SPEED = ["slow", "moderate", "fast"];

CircularLoader.prototype = {
  color: PropTypes.string,
  size: PropTypes.oneOf(CIRCULAR_SIZES),
  speed: PropTypes.oneOf(CIRCULAR_SPEED),
  strokeWidth: PropTypes.number,
};

export default function CircularLoader(props) {
  const propsStyle = {
    width: props.size ? circleSize(props.size) : "",
    height: props.size ? circleSize(props.size) : "",
    animationDuration: props.speed ? circleSpeed(props.speed) : "",
  };

  return (
    <div className="loader">
      <svg className="circular" viewBox="25 25 50 50" style={propsStyle}>
        <circle
          className="path"
          style={{ stroke: props.color ? props.color : "" }}
          cx={50}
          cy={50}
          r={20}
          fill="none"
          strokeWidth={props.strokeWidth ? props.strokeWidth : "2"}
          strokeMiterlimit={10}
        />
      </svg>
    </div>
  );
}

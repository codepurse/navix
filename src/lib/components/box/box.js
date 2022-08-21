import { PropTypes } from "prop-types";
import React from "react";

Box.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  margin: PropTypes.string,
};

export default function Box({
  children,
  backgroundColor,
  borderRadius,
  color,
  padding,
  width,
  height,
  minHeight,
  maxHeight,
  margin,
  ...props
}) {
  const propsStyle = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    color: color,
    padding: padding,
    width: width,
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    margin: margin,
    ...props.style,
  };
  return (
    <div {...props} className={props.className} style={propsStyle}>
      {children}
    </div>
  );
}

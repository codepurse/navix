import { PropTypes } from "prop-types";
import React from "react";

Paragraph.protoTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  underline: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  renderAs: PropTypes.string,
  underline: PropTypes.string,
  showLineNo: PropTypes.number,
};
export default function Paragraph(props) {
  const propsStyle = {
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? props.fontSize : "",
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    width: "100%",
    textDecoration: props.underline ? "underline" : "",
    ...props.style,
  };

  return React.createElement(
    props.renderAs ? props.renderAs : "p",
    {
      style: propsStyle,
      "data-paragraph": props.showLineNo ? "nvxParagraph" : "",
      className: props.className,
    },
    [props.children]
  );
}

import { PropTypes } from "prop-types";
import React from "react";
import { fontSize } from "./paragraphFunction";

Paragraph.protoTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  underline: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
  renderAs: PropTypes.string,
  underline: PropTypes.string,
  strikeThrough: PropTypes.string,
  alignText: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  showLineNo: PropTypes.number,
  required: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

Paragraph.defaultProps = {
  required: false,
  disabled: false,
  onClick: () => {},
  onHover: () => {},
};
export default function Paragraph(props) {
  const propsStyle = {
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? fontSize(props.fontSize) : null,
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    textAlign: props?.alignText ?? "left",
    width: "100%",
    opacity: props.disabled ? "0.4" : null,
    cursor: props.disabled ? "not-allowed" : "",
    textDecoration: props.underline
      ? "underline"
      : props.strikeThrough
      ? "line-through"
      : "",
    ...props.style,
  };

  return React.createElement(
    props.renderAs ? props.renderAs : "p",
    {
      style: propsStyle,
      "data-paragraph": props.showLineNo ? "nvxParagraph" : "",
      className: props?.className,
      id: props?.id,
      onClick: !props.disabled ? props.onClick : null,
    },
    [props.children],
    [
      React.createElement(
        "sup",
        {
          className: "nvxParagraphReq",
          style: { display: props.required ? "" : "none" },
        },
        "*"
      ),
    ]
  );
}

import { PropTypes } from "prop-types";
import React, { Fragment } from "react";
import { textType } from "./headerFunction";

Header.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  showLineNo: PropTypes.number,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
};

export default function Header(props) {
  const propsStyle = {
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? props.fontSize : "",
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    textDecoration: props.underline ? "underline" : "",
  };

  return (
    <Fragment>
      <div className="nvxDivHeader">
        <h1 id={textType(props.type)} style={propsStyle}>
          {props.children}
        </h1>
      </div>
    </Fragment>
  );
}

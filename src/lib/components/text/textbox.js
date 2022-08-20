import classNames from "classnames";
import { PropTypes } from "prop-types";
import React from "react";
import { borderType, textType } from "./textStyles";

const TEXT_SIZES = ["lg", "sm", "md"];

const TEXT_TYPES = ["default", "disabled", "danger"];

const TEXT_ALIGN_TEST = ["left", "center", "right"];

textbox.propTypes = {
  placeholder: PropTypes.string,
  fill: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TEXT_SIZES),
  type: PropTypes.oneOf(TEXT_TYPES),
  alignText: PropTypes.oneOf(TEXT_ALIGN_TEST),
  onlyNuber: PropTypes.bool,
  onlyLetter: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
};
export default function textbox(props) {
  const textClassName = classNames("txtNvxDefault", props.className);

  const numberOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const letterOnly = (event) => {
    if (/[^a-z]/gi.test(event.key)) {
      event.preventDefault();
    }
  };

  const propsStyle = {
    backgroundColor: textType(props.type),
    borderColor: borderType(props.type),
    width: props.fill && "100%",
    textAlign: props.alignText ? props.alignText : "",
    paddingLeft: props.iconLeft ? props.iconLeft : "30px",
    paddingRight: props.iconRight ? props.iconRight : "30px",
  };

  const customStyle = { ...propsStyle, ...props.css?.text };

  return (
    <div className="input-wrapper" style={{ width: props.fill && "100%" }}>
      <input
        style={customStyle}
        type="text"
        disabled={props.disabled && true}
        className={textClassName}
        value={props.value}
        maxLength={props.max}
        placeholder={props.placeholder}
        minLength={props.min}
        onKeyPress={(event) => {
          if (props.onlyNuber) {
            numberOnly(event);
          } else if (props.onlyLetter) {
            letterOnly(event);
          }
        }}
        onChange={(e) => {
          try {
            props.onChange(e);
          } catch (error) {}
        }}
      ></input>
      <i className="inputIconLeft" style={props.css?.text?.iconLeft}>
        {props.iconLeft}
      </i>
      <i className="inputIconRight" style={props.css?.text?.iconRight}>
        {props.iconRight}
      </i>
    </div>
  );
}

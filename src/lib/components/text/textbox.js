import classNames from "classnames";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Style from "style-it";
import { borderType, textSize } from "./textStyles";

const TEXT_SIZES = ["lg", "sm", "md"];

const TEXT_ALIGN_TEST = ["left", "center", "right"];

Textbox.propTypes = {
  placeholder: PropTypes.string,
  fill: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TEXT_SIZES),
  type: PropTypes.string,
  alignText: PropTypes.oneOf(TEXT_ALIGN_TEST),
  onlyNuber: PropTypes.bool,
  onlyLetter: PropTypes.bool,
  value: PropTypes.string,
  fontSize: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  isInvalid: PropTypes.bool,
  onKeyPress: PropTypes.func,
  styleLeftIcon: PropTypes.array,
  styleRightIcon: PropTypes.array,
};

Textbox.defaultProps = {
  disabled: false,
  fill: false,
  onClick: () => {},
  onKeyPress: () => {},
  size: "md",
  isInvalid: false,
  type: "text",
  styleLeftIcon: [],
  styleRightIcon: [],
};
export default function Textbox(props) {
  const textClassName = classNames("txtNvxDefault", props.className);
  const [formatStyle, setFormatStyle] = useState();
  let r = (Math.random() + 1).toString(36).substring(7); // for the sake of chancing style of placeholder
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

  const JSToCSS = (JS) => {
    let cssString = "";
    for (let objectKey in JS) {
      cssString +=
        objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
        ": " +
        JS[objectKey] +
        ";\n";
    }

    return cssString;
  };

  useEffect((e) => {
    setFormatStyle(JSToCSS(props.stylePlaceholder));
  }, []);

  const propsStyle = {
    borderColor: borderType(props.type),
    width: props.fill && "100%",
    textAlign: props.alignText ? props.alignText : "",
    paddingLeft: props.iconLeft ? "35px" : null,
    paddingRight: props.iconRight ? "35px" : null,
    fontSize: props.fontSize ? props.fontSize : textSize(props.size),
  };

  const customStyle = { ...propsStyle, ...props.style };

  return Style.it(
    `
    .${r}::placeholder {
      ${formatStyle}
    }
    `,
    <div className="input-wrapper" style={{ width: props.fill && "100%" }}>
      <input
        {...props}
        style={customStyle}
        type={props.type}
        disabled={props.disabled && true}
        className={textClassName + ` ${r}`}
        value={props.value}
        maxLength={props.max}
        data-invalid={props.isInvalid ? "invalid" : ""}
        placeholder={props.placeholder}
        minLength={props.min}
        onKeyPress={(event) => {
          if (props.onlyNuber) {
            numberOnly(event);
          } else if (props.onlyLetter) {
            letterOnly(event);
          }
          props.onKeyPress();
        }}
      ></input>
      <i className="inputIconLeft" style={props.styleLeftIcon}>
        {props.iconLeft}
      </i>
      <i className="inputIconRight" style={props.styleRightIcon}>
        {props.iconRight}
      </i>
    </div>
  );
}

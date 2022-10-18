import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Style from "style-it";

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  backDrop: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  color: PropTypes.string,
  checkedBgColor: PropTypes.string,
  labelStyle: PropTypes.string,
  background: PropTypes.string,
  checkedCaretColor: PropTypes.string,
  size: PropTypes.string,
  positionLabel: PropTypes.string,
};

Checkbox.defaultProps = {
  size: "sm",
  onChange: () => {},
  disabled: false,
  error: false,
  positionLabel: "right",
};

export default function Checkbox(props) {
  const [check, setCheck] = useState(false);
  const rndId = Math.floor((1 + Math.random()) * 0x10000);
  const ref = useRef("");
  var propsStyle = {
    backgroundColor: props.disabled && "lightgray",
    border: props.error ? "2px solid #ff5f5f" : "1px solid #E0E0E0",
  };

  const customProps = {
    boxShadow: props.backDrop
      ? `-200px -200px 5px 200px ${props.backDrop} inset`
      : null,
  };

  var customStyle = { ...propsStyle, ...customProps };
  const checkboxClassName = classNames(
    "checkbox bounce",
    props.className,
    {
      nvxCbxDisable: props.disabled === true,
    },
    {
      nvxCbxError: props.error === true,
    }
  );

  const checkboxSize = (value) => {
    switch (value) {
      case "md":
        return "nvxCbxMd";
      case "lg":
        return "nvxCbxLg";
      default:
        return "";
    }
  };

  useEffect(
    (e) => {
      if (props?.checked === true || props?.checked === false) {
        setCheck(props.checked);
      } else {
      }
    },
    [props.checked]
  );

  return Style.it(
    `
    .nvxCbx .checkbox input  {
      background: ${props?.background ?? "white"};
      }
      .nvxCbx .checkbox input:checked {
        box-shadow: inset 10px 10px 0px 191px ${
          props?.checkedBgColor ?? "var(--blue-600)"
        }
     }
     .nvxCbx .checkbox.bounce {
      --stroke: ${props?.checkedCaretColor ?? "white"};
   }
   
    `,
    <div className={"nvxCbx " + checkboxSize(props?.size)}>
      {props.positionLabel === "left" ? (
        <label
          htmlFor={rndId}
          style={
            (props?.labelStyle, { marginRight: "10px", marginLeft: "0px" })
          }
        >
          {props.label}
        </label>
      ) : null}
      <label className={checkboxClassName}>
        <input
          type="checkbox"
          ref={ref}
          id={rndId}
          checked={check}
          disabled={props.disabled}
          onChange={(e) => {
            if (props?.checked === true || props?.checked === false) {
            } else {
              setCheck(e.currentTarget.checked);
            }
            try {
              props.onChange(e.currentTarget.checked);
            } catch (error) {}
          }}
          style={check ? customStyle : propsStyle}
        />
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
      {props.positionLabel === "right" ? (
        <label
          htmlFor={rndId}
          style={(props?.labelStyle, { marginLeft: "10px" })}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
}

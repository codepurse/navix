import { PropTypes } from "prop-types";
import React, { useContext, useState } from "react";
import Style from "style-it";
import { RadioContext } from "../../context/radioContext";
const RADIO_SIZES = ["lg", "sm", "md"];

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(RADIO_SIZES),
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
  _TYPE: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  __TYPE: "Radio",
  onClick: () => {},
  onChange: () => {},
  className: "",
};

export default function Radio(props) {
  const randomName = Math.random();
  const value = useContext(RadioContext);
  const [active, setActive] = useState("1");
  const propsStyle = {
    borderColor: "red",
    cursor: props.disabled ? "not-allowed" : "",
    color: props.disabled ? "gray" : "",
  };
  /* 
  useEffect(
    (e) => {
      if (active !== value.default) {
        setActive(value.default);
      } else {
      }
    },
    [value.default]
  ); */

  /*  useEffect(
    (e) => {
      try {
        document.getElementById(active).checked = true;
      } catch (error) {}
    },
    [active]
  );
 */
  const radioSize = (value) => {
    switch (value) {
      case "md":
        return "nvxRadioMd";
      case "lg":
        return "nvxRadioLg";
      default:
        return "";
    }
  };

  return Style.it(
    `
    .nvxRadio + .nvxRadioLabel::before  {
      border: 1px solid ${props?.color ? props?.color : "var(--blue-600)"};
      }
    .nvxRadio + .nvxRadioLabel::after {
      border: 1px solid ${props?.color};
      background: ${props?.color ? props.color : "var(--blue-600)"};
      }
    `,
    <div className="nvxRadioDiv">
      <input
        className={"nvxRadio " + radioSize(props.size) + ` ${props.className}`}
        type="radio"
        value={props.value}
        id={props.value + randomName}
        defaultChecked={value.default === props.value ? true : false}
        name={value.name}
        onClick={(e) => {
          setActive(props.value);
        }}
        disabled={props.disabled ? true : false}
        onChange={(e) => {
          setActive(props.value);
          props.onChange(e.currentTarget.checked);
        }}
      />
      <label
        className={
          props.invalid ? "nvxRadioLabel nvxRadioLblInvalid" : "nvxRadioLabel"
        }
        id={props.disabled ? "nvxRadioLblInvalid" : ""}
        style={propsStyle}
        htmlFor={props.value + randomName}
      >
        {props.label}
      </label>
    </div>
  );
}

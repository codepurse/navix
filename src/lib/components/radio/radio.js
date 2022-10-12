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
};

Radio.defaultProps = {
  __TYPE: "Radio",
  onClick: () => {},
  onChange: () => {},
};

export default function Radio(props) {
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
      border: 1px solid ${props?.color ? props?.color : "#00679d"};
      }
    .nvxRadio + .nvxRadioLabel::after {
      border: 1px solid ${props?.color};
      background: ${props?.color ? props.color : "#00679d"};
      }
    `,
    <div className="nvxRadioDiv">
      <input
        className={"nvxRadio " + radioSize(props.size)}
        type="radio"
        id={props.value}
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
        htmlFor={props.value}
      >
        {props.label}
      </label>
    </div>
  );
}

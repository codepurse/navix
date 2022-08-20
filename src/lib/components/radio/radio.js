import { PropTypes } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { RadioContext } from "../../context/radioContext";
const RADIO_SIZES = ["lg", "sm", "md"];

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(RADIO_SIZES),
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
};

export default function Radio(props) {
  const value = useContext(RadioContext);
  const [active, setActive] = useState("1");
  const propsStyle = {
    borderColor: "red",
    cursor: props.disabled ? "not-allowed" : "",
    color: props.disabled ? "gray" : "",
  };

  useEffect(
    (e) => {
      if (active !== value.default) {
        setActive(value.default);
      } else {
      }
    },
    [value.default]
  );

  useEffect(
    (e) => {
      try {
        document.getElementById(active).checked = true;
      } catch (error) {}
    },
    [active]
  );

  return (
    <>
      <div className="nvxRadioDiv">
        <input
          className="nvxRadio"
          type="radio"
          id={props.value}
          name={value.name}
          onClick={(e) => {
            setActive(props.value);
          }}
          disabled={props.disabled ? true : false}
          onChange={(e) => {
            setActive(props.value);
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
    </>
  );
}

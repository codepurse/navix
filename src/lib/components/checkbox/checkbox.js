import { PropTypes } from "prop-types";
import React, { useRef, useState } from "react";

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disable: PropTypes.bool,
  backDrop: PropTypes.string,
  onChange: PropTypes.func,
};

export default function Checkbox(props) {
  const [check, setCheck] = useState(false);
  const ref = useRef("");
  var propsStyle = {
    backgroundColor: props.disabled && "lightgray",
    border: props.invalid ? "2px solid #ff5f5f" : "1px solid #E0E0E0",
  };

  const customProps = {
    boxShadow: props.backDrop
      ? `-200px -200px 5px 200px ${props.backDrop} inset`
      : null,
  };

  var customStyle = { ...propsStyle, ...customProps };
  return (
    <div className="nvxCbx">
      <label className="checkbox bounce">
        <input
          type="checkbox"
          ref={ref}
          checked={props.checked}
          disabled={props.disabled}
          onChange={(e) => {
            if (e.currentTarget.checked) {
              setCheck(true);
            } else {
              setCheck(false);
            }
            try {
              props.onChange(e);
            } catch (error) {}
          }}
          style={check ? customStyle : propsStyle}
        />
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
        <span style={props.css?.checkbox.label}>{props.label}</span>
      </label>
    </div>
  );
}

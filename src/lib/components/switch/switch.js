import { PropTypes } from "prop-types";
import React from "react";

Switch.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default function Switch(props) {
  const propsStyle = {
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : "",
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={props.active} disabled={props.disabled} />
      <span className="slider" style={propsStyle}></span>
    </label>
  );
}

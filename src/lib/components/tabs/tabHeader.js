import { PropTypes } from "prop-types";
import React, { useContext, useRef, useState } from "react";
import { TabContext } from "../../context/tabsContext";

TabHeader.prototype = {
  label: PropTypes.string,
  selected: PropTypes.array,
  disable: PropTypes.bool,
};

export default function TabHeader(props) {
  const value = useContext(TabContext);
  const ref = useRef(null);
  const [key, setKey] = useState(false);

  const checkVariant = (event) => {
    if (event.propStyle.variant === "borderline") {
      return "transparent";
    } else if (event.propStyle.backgroundColor) {
      return event.propStyle.backgroundColor;
    } else {
      return;
    }
  };

  const styleCheck = {
    color: "white",
    border: "none",
    fontWeight: "500",
    borderRadius: "25px",
    backgroundColor: "#003A61",
    cursor: props.disable ? "not-allowed" : null,
  };

  var customStyle = { ...styleCheck, ...props.selected };

  return (
    <>
      <input
        type="radio"
        name="tabs"
        id={props.id}
        disabled={true}
        ref={ref}
        onChange={(e) => {}}
        onClick={(e) => {
          try {
            props.onClick();
          } catch (error) {}
        }}
      />
      <label htmlFor={props.id} style={key === props.id ? customStyle : null}>
        <span>{props.label}</span>
      </label>
    </>
  );
}

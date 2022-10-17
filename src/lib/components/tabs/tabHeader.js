import { PropTypes } from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TabContext } from "../../context/tabsContext";

TabHeader.prototype = {
  label: PropTypes.string,
  selected: PropTypes.array,
  disabled: PropTypes.bool,
  _TYPE: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

TabHeader.defaultProps = {
  __TYPE: "TabHeader",
  disabled: false,
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
      return "var(--blue-600)";
    }
  };

  const styleCheck = {
    color: value.propStyle.variant === "borderline" ? "#212121" : "white",
    border: "none",
    fontWeight: "500",
    borderRadius: value.propStyle.variant === "borderline" ? "0px" : "25px",
    backgroundColor: checkVariant(value),
    borderBottom:
      value.propStyle.variant === "borderline" ? "2px solid #003A61" : null,
  };

  const propStyle = {
    cursor: props.disabled ? "not-allowed" : null,
    opacity: props.disabled ? "0.5" : null,
  };

  var customStyle = { ...styleCheck, ...props.selected };

  useEffect(
    (e) => {
      setKey(value.activeKey);
    },
    [value.activeKey]
  );

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
          if (!props.disabled) {
            try {
              props.onClick();
            } catch (error) {}
          }
        }}
      />
      <div
        className="divLabel vertical-align"
        htmlFor={props.id}
        style={{ ...(key === props.id ? customStyle : null), ...propStyle }}
      >
        <span>{props.label}</span>
      </div>
    </>
  );
}

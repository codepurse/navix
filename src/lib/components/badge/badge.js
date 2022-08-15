import { PropTypes } from "prop-types";
import React from "react";
import { badgeType } from "./badgeFunction";

const BADGE_TYPE = ["primary", "success", "danger", "warning"];

Badge.propTypes = {
  type: PropTypes.oneOf(BADGE_TYPE),
  variant: PropTypes.string,
  padding: PropTypes.string,
};

export default function Badge(props) {
  const propsStype = {
    fontSize: props.fontSize ? props.fontSize : "",
    ...badgeType(props.type),
    padding: props.padding ? props.padding : "",
  };

  return (
    <span className="nvxSpan" style={propsStype}>
      {props.children}
    </span>
  );
}

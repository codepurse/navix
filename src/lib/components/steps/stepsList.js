import { PropTypes } from "prop-types";
import React from "react";

StepsList.propTypes = {
  __TYPE: PropTypes.string,
  withNum: PropTypes.bool,
};

StepsList.defaultProps = {
  __TYPE: "StepsList",
};

export default function StepsList(props) {
  return <span {...props}>{props?.withNum ? props.num : ""}</span>;
}

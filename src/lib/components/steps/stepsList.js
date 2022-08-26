import { PropTypes } from "prop-types";
import React from "react";

StepsList.propTypes = {
  __TYPE: PropTypes.string,
};

StepsList.defaultProps = {
  __TYPE: "StepsList",
};

export default function StepsList(props) {
  return <span>{props.children}</span>;
}

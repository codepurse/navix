import { PropTypes } from "prop-types";
import React from "react";

TblData.propTypes = {
  __TYPE: PropTypes.string,
};

TblData.defaultProps = {
  __TYPE: "TblData",
};

export default function TblData(props) {
  return <td>{props.children}</td>;
}

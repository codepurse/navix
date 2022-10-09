import { PropTypes } from "prop-types";
import React from "react";

TblHeader.propTypes = {
  __TYPE: PropTypes.string,
};

TblHeader.defaultProps = {
  __TYPE: "TblHeader",
};

export default function TblHeader(props) {
  return <th>{props.children}</th>;
}

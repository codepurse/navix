"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Divider;

var _propTypes = require("prop-types");

const DIVIDER_SIZES = ["xl", "lg", "sm", "md", "xs"];
const DIVIDER_TYPE = ["solid", "dashed", "dotted"];
const DIVIDER_ORIENTATION = ["vertical", "horizontal"];
Divider.propTypes = {
  type: _propTypes.PropTypes.oneOf(DIVIDER_TYPE),
  size: _propTypes.PropTypes.oneOf(DIVIDER_SIZES),
  orientation: _propTypes.PropTypes.oneOf(DIVIDER_ORIENTATION),
  color: _propTypes.PropTypes.string
};
Divider.defaultProps = {
  type: "solid",
  size: "xs",
  orientation: "horizontal",
  color: "var(--dark-100)"
};

function Divider(props) {
  const propStyle = {
    width: "".concat(props.orientation === "horizontal" ? "100%" : "0px"),
    height: "".concat(props.orientation === "vertical" ? "100%" : "0px"),
    borderColor: "".concat(props.color),
    borderStyle: "".concat(props.type),
    borderWidth: "".concat(props.orientation === "horizontal" ? "0px 0px 1px" : "0px 0px 0px 1px")
  };
  return /*#__PURE__*/React.createElement("hr", {
    className: "nvxDivider",
    style: propStyle
  });
}
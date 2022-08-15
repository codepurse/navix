"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CircularLoader;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _circularFunction = require("./circularFunction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CIRCULAR_SIZES = ["sm", "md", "lg", "xl"];
const CIRCULAR_SPEED = ["slow", "moderate", "fast"];
CircularLoader.prototype = {
  color: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(CIRCULAR_SIZES),
  speed: _propTypes.PropTypes.oneOf(CIRCULAR_SPEED),
  strokeWidth: _propTypes.PropTypes.number
};

function CircularLoader(props) {
  const propsStyle = {
    width: props.size ? (0, _circularFunction.circleSize)(props.size) : "",
    height: props.size ? (0, _circularFunction.circleSize)(props.size) : "",
    animationDuration: props.speed ? (0, _circularFunction.circleSpeed)(props.speed) : ""
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "circular",
    viewBox: "25 25 50 50",
    style: propsStyle
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: "path",
    style: {
      stroke: props.color ? props.color : ""
    },
    cx: 50,
    cy: 50,
    r: 20,
    fill: "none",
    strokeWidth: props.strokeWidth ? props.strokeWidth : "2",
    strokeMiterlimit: 10
  })));
}
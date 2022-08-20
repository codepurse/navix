"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Switch.propTypes = {
  active: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool
};

function Switch(props) {
  const propsStyle = {
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : ""
  };
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: props.active,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider",
    style: propsStyle
  }));
}
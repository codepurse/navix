"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Overlay;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Overlay(props) {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "nvxOverlay bottom"
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: !props.show ? "nvxfadeOut nvxOverlayInner " : "nvxOverlayInner nvxfadeIn"
  }, props.rendered));
}
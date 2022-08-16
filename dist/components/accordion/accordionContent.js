"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccordionContent;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccordionContent(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxAccordionContent"
  }, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination() {
  const num = 5;
  const numbers = [1, 2, 3, 4, 5];
  const listItems = [Array(5)].map(number => /*#__PURE__*/_react.default.createElement("li", {
    key: number.toString()
  }, /*#__PURE__*/_react.default.createElement("a", null, number)));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxPagination"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "nvxLiBck"
  }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })))), Array.from({
    length: num
  }, (_, i) => i < 5 && /*#__PURE__*/_react.default.createElement("li", {
    style: {
      color: i === 2 ? "tomato" : "white"
    }
  }, /*#__PURE__*/_react.default.createElement("a", null, i))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nvxLiNxt"
  }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  }))))));
}
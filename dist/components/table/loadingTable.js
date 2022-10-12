"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadingTable;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadingTable(props) {
  return /*#__PURE__*/_react.default.createElement("tr", null, Array.apply(null, {
    length: props.count
  }).map((e, i) => /*#__PURE__*/_react.default.createElement("td", {
    className: "nvxTdLoad",
    key: i
  }, /*#__PURE__*/_react.default.createElement("div", null))));
}
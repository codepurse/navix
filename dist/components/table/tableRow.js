"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TblRow;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TblRow(props) {
  return /*#__PURE__*/_react.default.createElement("tr", null, props.children);
}
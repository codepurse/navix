"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TblData;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

TblData.propTypes = {
  __TYPE: _propTypes.PropTypes.string
};
TblData.defaultProps = {
  __TYPE: "TblData"
};

function TblData(props) {
  return /*#__PURE__*/_react.default.createElement("td", null, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TblHeader;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

TblHeader.propTypes = {
  __TYPE: _propTypes.PropTypes.string
};
TblHeader.defaultProps = {
  __TYPE: "TblHeader"
};

function TblHeader(props) {
  return /*#__PURE__*/_react.default.createElement("th", null, props.children);
}
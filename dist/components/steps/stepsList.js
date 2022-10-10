"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StepsList;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

StepsList.propTypes = {
  __TYPE: _propTypes.PropTypes.string,
  withNum: _propTypes.PropTypes.bool
};
StepsList.defaultProps = {
  __TYPE: "StepsList"
};

function StepsList(props) {
  return /*#__PURE__*/_react.default.createElement("span", props, props !== null && props !== void 0 && props.withNum ? props.num : "");
}
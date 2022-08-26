"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Space;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _spaceFunction = require("./spaceFunction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SPACE_DIRECTION = ["row", "column"];
const SPACE_ALIGN = ["end", "center", "start", "between", "evenly"];
Space.propTypes = {
  direction: _propTypes.PropTypes.oneOf(SPACE_DIRECTION),
  gap: _propTypes.PropTypes.number,
  align: _propTypes.PropTypes.oneOf(SPACE_ALIGN)
};
Space.defaultProps = {
  direction: "row"
};

function Space(props) {
  const propsStyle = {
    flexDirection: props.direction,
    justifyContent: (0, _spaceFunction.spaceAlign)(props.align),
    display: "flex",
    gap: props.gap + "px"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: propsStyle
  }, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skeleton;

require("core-js/modules/es.object.assign.js");

var _propTypes = require("prop-types");

var _box = _interopRequireDefault(require("../box/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Skeleton.propTypes = {
  show: _propTypes.PropTypes.bool,
  startColor: _propTypes.PropTypes.string,
  middleColor: _propTypes.PropTypes.string,
  endColor: _propTypes.PropTypes.string,
  animationSpeed: _propTypes.PropTypes.string,
  enableAnimation: _propTypes.PropTypes.bool
};
Skeleton.defaultProps = {
  show: true,
  startColor: "#eee",
  middleColor: "#ddd",
  endColor: "#eee",
  animationSpeed: "5s",
  enableAnimation: true
};

function Skeleton(props) {
  const propsStyle = {
    background: !props.show ? "transparent" : "linear-gradient(to right, ".concat(props.startColor, " 20%, ").concat(props.middleColor, " 50%, ").concat(props.endColor, " 80%)"),
    animationDuration: "".concat(props.enableAnimation ? props.animationSpeed : "0s")
  };
  return /*#__PURE__*/React.createElement(_box.default, _extends({
    className: "nvxSkeleton"
  }, props, {
    style: propsStyle
  }), /*#__PURE__*/React.createElement(_box.default, {
    visibility: props.show ? "hidden" : ""
  }, props.children));
}
"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../box/box"));

var _badgeFunction = require("./badgeFunction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BADGE_TYPE = ["success", "danger", "warning", "info", "neutral"];
const BADGE_POSITION = ["top-right", "top-left", "bottom-right", "bottom-left"];
const BADGE_SIZE = ["xs", "sm", "md", "lg"];
Badge.propTypes = {
  type: _propTypes.PropTypes.oneOf(BADGE_TYPE),
  position: _propTypes.PropTypes.oneOf(BADGE_POSITION),
  size: _propTypes.PropTypes.oneOf(BADGE_SIZE)
};

function Badge(props) {
  const badgeClassName = (0, _classnames.default)("nvxBadge", props.className, (0, _badgeFunction.badgeType)(props.type));

  const propStyle = _objectSpread(_objectSpread({
    fontSize: (0, _badgeFunction.fontSize)(props.size)
  }, props.style), (0, _badgeFunction.positionType)(props.position));

  console.log((0, _badgeFunction.fontSize)(props.size));
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: badgeClassName,
    style: propStyle
  }, props), props.children);
}
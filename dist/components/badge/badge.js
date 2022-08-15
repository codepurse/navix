"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _badgeFunction = require("./badgeFunction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BADGE_TYPE = ["primary", "success", "danger", "warning"];
Badge.propTypes = {
  type: _propTypes.PropTypes.oneOf(BADGE_TYPE),
  variant: _propTypes.PropTypes.string,
  padding: _propTypes.PropTypes.string
};

function Badge(props) {
  const propsStype = _objectSpread(_objectSpread({
    fontSize: props.fontSize ? props.fontSize : ""
  }, (0, _badgeFunction.badgeType)(props.type)), {}, {
    padding: props.padding ? props.padding : ""
  });

  return /*#__PURE__*/_react.default.createElement("span", {
    className: "nvxSpan",
    style: propsStype
  }, props.children);
}
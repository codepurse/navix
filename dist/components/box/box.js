"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

const _excluded = ["children", "backgroundColor", "borderRadius", "color", "padding", "width", "height", "minHeight", "maxHeight", "margin"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Box.propTypes = {
  backgroundColor: _propTypes.PropTypes.string,
  borderRadius: _propTypes.PropTypes.number,
  color: _propTypes.PropTypes.string,
  padding: _propTypes.PropTypes.string,
  width: _propTypes.PropTypes.number,
  height: _propTypes.PropTypes.number,
  minHeight: _propTypes.PropTypes.number,
  maxHeight: _propTypes.PropTypes.number,
  margin: _propTypes.PropTypes.string
};

function Box(_ref) {
  let {
    children,
    backgroundColor,
    borderRadius,
    color,
    padding,
    width,
    height,
    minHeight,
    maxHeight,
    margin
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const propsStyle = _objectSpread({
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    color: color,
    padding: padding,
    width: width,
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    margin: margin
  }, props.style);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: props.className,
    style: propsStyle
  }), children);
}
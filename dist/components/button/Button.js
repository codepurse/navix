"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _buttonStyles = require("../button/buttonStyles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BUTTON_SIZES = ["lg", "sm", "md"];
const BUTTON_TYPES = ["default", "primary", "success", "warning", "danger"];
const BUTTON_ALIGN_TEST = ["left", "center", "right"];
const BUTTON_TARGET = ["_self", "_blank", "_parent", "_top", "string"];
Button.propTypes = {
  title: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(BUTTON_SIZES),
  type: _propTypes.PropTypes.oneOf(BUTTON_TYPES),
  disabled: _propTypes.PropTypes.bool,
  children: _propTypes.PropTypes.node,
  onclick: _propTypes.PropTypes.func,
  outline: _propTypes.PropTypes.bool,
  iconLeft: _propTypes.PropTypes.node,
  iconRight: _propTypes.PropTypes.node,
  fill: _propTypes.PropTypes.bool,
  alignText: _propTypes.PropTypes.oneOf(BUTTON_ALIGN_TEST),
  href: _propTypes.PropTypes.bool,
  target: _propTypes.PropTypes.oneOf(BUTTON_TARGET),
  isLoading: _propTypes.PropTypes.bool,
  circular: _propTypes.PropTypes.bool
};

function Button(props) {
  var _props$css, _props$css2;

  const buttonClassName = (0, _classnames.default)("btnNvxDefault", props.className, {
    "btn--loading btnLoad": props.isLoading === true
  });
  const propsStyle = {
    backgroundColor: (0, _buttonStyles.buttonType)(props.type),
    textAlign: props.alignText ? props.alignText : "center",
    width: props.fill && "100%",
    fontSize: (0, _buttonStyles.buttonSize)(props.size),
    borderRadius: props.circular ? "500px" : null
  };

  const customStyle = _objectSpread(_objectSpread({}, propsStyle), (_props$css = props.css) === null || _props$css === void 0 ? void 0 : _props$css.button);

  return /*#__PURE__*/_react.default.createElement("button", {
    style: customStyle,
    className: buttonClassName,
    onClick: e => {
      if (props.disabled || props.isLoading) {
        e.preventDefault();
        return;
      } else {
        try {
          props.onClick();
        } catch (error) {}
      }
    }
  }, props.isLoading ? /*#__PURE__*/_react.default.createElement("span", {
    className: "spanLoad"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: (_props$css2 = props.css) === null || _props$css2 === void 0 ? void 0 : _props$css2.button.dots
  }), /*#__PURE__*/_react.default.createElement("b", null), /*#__PURE__*/_react.default.createElement("b", null)) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
    className: "iNvxIconLeft"
  }, props.iconLeft), props.children, /*#__PURE__*/_react.default.createElement("i", {
    className: "iNvxIconRight"
  }, props.iconRight)));
}
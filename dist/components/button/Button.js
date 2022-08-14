"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = require("react");

var _buttonModule = _interopRequireDefault(require("../button/button.module.scss"));

var _buttonStyles = require("../button/buttonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var _props$css;

  const buttonClassName = (0, _classnames.default)(_buttonModule.default.btnNvxDefault, props.className, {
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

  return /*#__PURE__*/React.createElement("button", {
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
  }, props.isLoading ? /*#__PURE__*/React.createElement("span", {
    className: "spanLoad"
  }, /*#__PURE__*/React.createElement("b", {
    style: props.css.button.dots
  }), /*#__PURE__*/React.createElement("b", null), /*#__PURE__*/React.createElement("b", null)) : /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: _buttonModule.default.iNvxIconLeft
  }, props.iconLeft), props.children, /*#__PURE__*/React.createElement("i", {
    className: _buttonModule.default.iNvxIconRight
  }, props.iconRight)));
}
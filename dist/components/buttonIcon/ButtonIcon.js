"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonIcon;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ButtonIconStyle = require("./ButtonIconStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BUTTON_ICON_SIZE = ["lg", "md", "sm"];
ButtonIcon.propTypes = {
  iconRendered: _propTypes.PropTypes.node,
  variant: _propTypes.PropTypes.string,
  disabled: _propTypes.PropTypes.bool,
  fontSize: _propTypes.PropTypes.string,
  color: _propTypes.PropTypes.string,
  rounded: _propTypes.PropTypes.bool,
  size: _propTypes.PropTypes.oneOf(BUTTON_ICON_SIZE),
  style: _propTypes.PropTypes.array,
  onClick: _propTypes.PropTypes.func,
  onMouseOver: _propTypes.PropTypes.func,
  onMouseDown: _propTypes.PropTypes.func,
  onMouseUp: _propTypes.PropTypes.func
};
ButtonIcon.defaultProps = {
  disabled: false,
  onClick: () => {},
  onMouseOver: () => {},
  onMouseUp: () => {},
  onMouseDown: () => {}
};

function ButtonIcon(props) {
  const propsStyle = _objectSpread({
    borderRadius: props.rounded ? "5000px" : "",
    fontSize: props.fontSize ? props.fontSize : (0, _ButtonIconStyle.buttonSize)(props.size),
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : "1",
    color: props.color ? props.color : "black"
  }, props.style);

  return /*#__PURE__*/_react.default.createElement("button", {
    style: propsStyle,
    onClick: e => {
      if (!props.disabled) {
        props.onClick();
      }
    },
    onMouseOver: e => {
      if (!props.disabled) {
        props.onMouseOver();
      }
    },
    onMouseDown: e => {
      props.onMouseDown();
    },
    onMouseUp: e => {
      props.onMouseUp();
    },
    className: props.variant === "delete" ? "nvxBtnIcon nvxBtnIconDelete" : "nvxBtnIcon"
  }, /*#__PURE__*/_react.default.createElement("i", null, props.iconRendered ? props.iconRendered : (0, _ButtonIconStyle.buttonType)(props.variant)));
}
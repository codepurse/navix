"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textbox;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _textStyles = require("./textStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TEXT_SIZES = ["lg", "sm", "md"];
const TEXT_TYPES = ["default", "disabled", "danger"];
const TEXT_ALIGN_TEST = ["left", "center", "right"];
textbox.propTypes = {
  placeholder: _propTypes.PropTypes.string,
  fill: _propTypes.PropTypes.bool,
  iconLeft: _propTypes.PropTypes.node,
  iconRight: _propTypes.PropTypes.node,
  onclick: _propTypes.PropTypes.func,
  disabled: _propTypes.PropTypes.bool,
  size: _propTypes.PropTypes.oneOf(TEXT_SIZES),
  type: _propTypes.PropTypes.oneOf(TEXT_TYPES),
  alignText: _propTypes.PropTypes.oneOf(TEXT_ALIGN_TEST),
  onlyNuber: _propTypes.PropTypes.bool,
  onlyLetter: _propTypes.PropTypes.bool,
  value: _propTypes.PropTypes.string,
  onChange: _propTypes.PropTypes.func,
  max: _propTypes.PropTypes.number,
  min: _propTypes.PropTypes.number
};

function textbox(props) {
  var _props$css, _props$css2, _props$css2$text, _props$css3, _props$css3$text;

  const textClassName = (0, _classnames.default)("txtNvxDefault", props.className);

  const numberOnly = event => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const letterOnly = event => {
    if (/[^a-z]/gi.test(event.key)) {
      event.preventDefault();
    }
  };

  const propsStyle = {
    backgroundColor: (0, _textStyles.textType)(props.type),
    borderColor: (0, _textStyles.borderType)(props.type),
    width: props.fill && "100%",
    textAlign: props.alignText ? props.alignText : "",
    paddingLeft: props.iconLeft ? props.iconLeft : "30px",
    paddingRight: props.iconRight ? props.iconRight : "30px"
  };

  const customStyle = _objectSpread(_objectSpread({}, propsStyle), (_props$css = props.css) === null || _props$css === void 0 ? void 0 : _props$css.text);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper",
    style: {
      width: props.fill && "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    style: customStyle,
    type: "text",
    disabled: props.disabled && true,
    className: textClassName,
    value: props.value,
    maxLength: props.max,
    placeholder: props.placeholder,
    minLength: props.min,
    onKeyPress: event => {
      if (props.onlyNuber) {
        numberOnly(event);
      } else if (props.onlyLetter) {
        letterOnly(event);
      }
    },
    onChange: e => {
      try {
        props.onChange(e);
      } catch (error) {}
    }
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "inputIconLeft",
    style: (_props$css2 = props.css) === null || _props$css2 === void 0 ? void 0 : (_props$css2$text = _props$css2.text) === null || _props$css2$text === void 0 ? void 0 : _props$css2$text.iconLeft
  }, props.iconLeft), /*#__PURE__*/_react.default.createElement("i", {
    className: "inputIconRight",
    style: (_props$css3 = props.css) === null || _props$css3 === void 0 ? void 0 : (_props$css3$text = _props$css3.text) === null || _props$css3$text === void 0 ? void 0 : _props$css3$text.iconRight
  }, props.iconRight));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paragraph;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _paragraphFunction = require("./paragraphFunction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Paragraph.protoTypes = {
  color: _propTypes.PropTypes.string,
  fontSize: _propTypes.PropTypes.string,
  underline: _propTypes.PropTypes.bool,
  bold: _propTypes.PropTypes.bool,
  italic: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  renderAs: _propTypes.PropTypes.string,
  underline: _propTypes.PropTypes.string,
  strikeThrough: _propTypes.PropTypes.string,
  alignText: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  showLineNo: _propTypes.PropTypes.number,
  required: _propTypes.PropTypes.bool,
  onClick: _propTypes.PropTypes.func,
  onHover: _propTypes.PropTypes.func
};
Paragraph.defaultProps = {
  required: false,
  disabled: false,
  onClick: () => {},
  onHover: () => {}
};

function Paragraph(props) {
  var _props$alignText;

  const propsStyle = _objectSpread({
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? (0, _paragraphFunction.fontSize)(props.fontSize) : null,
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    textAlign: (_props$alignText = props === null || props === void 0 ? void 0 : props.alignText) !== null && _props$alignText !== void 0 ? _props$alignText : "left",
    width: "100%",
    opacity: props.disabled ? "0.4" : null,
    cursor: props.disabled ? "not-allowed" : "",
    textDecoration: props.underline ? "underline" : props.strikeThrough ? "line-through" : ""
  }, props.style);

  return /*#__PURE__*/_react.default.createElement(props.renderAs ? props.renderAs : "p", {
    style: propsStyle,
    "data-paragraph": props.showLineNo ? "nvxParagraph" : "",
    className: props === null || props === void 0 ? void 0 : props.className,
    id: props === null || props === void 0 ? void 0 : props.id,
    onClick: !props.disabled ? props.onClick : null
  }, [props.children], [/*#__PURE__*/_react.default.createElement("sup", {
    className: "nvxParagraphReq",
    style: {
      display: props.required ? "" : "none"
    }
  }, "*")]);
}
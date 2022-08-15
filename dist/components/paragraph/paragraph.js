"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paragraph;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Paragraph.protoTypes = {
  color: _propTypes.PropTypes.string,
  fontSize: _propTypes.PropTypes.string,
  underline: _propTypes.PropTypes.bool,
  bold: _propTypes.PropTypes.bool,
  italic: _propTypes.PropTypes.bool,
  renderAs: _propTypes.PropTypes.string,
  underline: _propTypes.PropTypes.string,
  showLineNo: _propTypes.PropTypes.number
};

function Paragraph(props) {
  const propsStyle = {
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? props.fontSize : "",
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    textDecoration: props.underline ? "underline" : ""
  };
  return /*#__PURE__*/_react.default.createElement(props.renderAs ? props.renderAs : "p", {
    style: propsStyle
  }, [props.children]);
}
"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _headerFunction = require("./headerFunction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Header.propTypes = {
  size: _propTypes.PropTypes.number,
  color: _propTypes.PropTypes.string,
  fontSize: _propTypes.PropTypes.string,
  showLineNo: _propTypes.PropTypes.number,
  bold: _propTypes.PropTypes.bool,
  italic: _propTypes.PropTypes.bool,
  underline: _propTypes.PropTypes.bool
};

function Header(props) {
  const propsStyle = {
    color: props.color ? props.color : "",
    fontSize: props.fontSize ? props.fontSize : "",
    WebkitLineClamp: props.showLineNo ? props.showLineNo : "",
    fontWeight: props.bold ? "bold" : "",
    fontStyle: props.italic ? "italic" : "",
    textDecoration: props.underline ? "underline" : ""
  };
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxDivHeader"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    id: (0, _headerFunction.textType)(props.type),
    style: propsStyle
  }, props.children)));
}
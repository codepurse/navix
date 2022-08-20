"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListItem(props) {
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxListItem"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: "80px"
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "nvxIconList"
  }, props.renderIcon ? props.renderIcon : /*#__PURE__*/_react.default.createElement("span", null, "\u2688"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxListInner"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "nvxListHeader"
  }, props.label), props.subLabel ? /*#__PURE__*/_react.default.createElement("p", {
    className: "nvxListHeaderSub"
  }, props.subLabel) : "", props.children)));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccordionItem;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _accordionContext = require("../../context/accordionContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ACCORDION_ICON_ALIGN = ["left", "right"];
AccordionItem.propTypes = {
  title: _propTypes.PropTypes.string,
  icon: _propTypes.PropTypes.node,
  alignIcon: _propTypes.PropTypes.oneOf(ACCORDION_ICON_ALIGN),
  onclick: _propTypes.PropTypes.node,
  active: _propTypes.PropTypes.bool
};

function AccordionItem(props) {
  const value = (0, _react.useContext)(_accordionContext.AccordionContext);
  const itemsRef = (0, _react.useRef)();
  const [spaces, setSpaces] = (0, _react.useState)("intact");
  const [open, setOpen] = (0, _react.useState)(false);
  (0, _react.useEffect)(e => {
    setSpaces(value.space);

    if (props.active) {
      setOpen(true);
    }
  }, [props]);
  (0, _react.useEffect)(e => {
    if (!open) {
      itemsRef.current.style.height = "auto";
    } else {
      itemsRef.current.style.height = itemsRef.current.scrollHeight + "px";
    }
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: spaces === "separeted" ? "nvxAccordionItem nvxAccordionSeparated" : "nvxAccordionItem ",
    ref: itemsRef,
    onClick: e => {
      setOpen(value => !value);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-items",
    style: {
      order: props.alignIcon === "left" ? 1 : 0
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: "0px"
    }
  }, props.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-items"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: open ? "nvxAccordionArrow nvxAccordionShow" : "nvxAccordionArrow"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  }))))), (e => {
    if (open) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children);
    } else {
      return null;
    }
  })());
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabHeader;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _tabsContext = require("../../context/tabsContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

TabHeader.prototype = {
  label: _propTypes.PropTypes.string,
  selected: _propTypes.PropTypes.array,
  disable: _propTypes.PropTypes.bool
};

function TabHeader(props) {
  const value = (0, _react.useContext)(_tabsContext.TabContext);
  const ref = (0, _react.useRef)(null);
  const [key, setKey] = (0, _react.useState)(false);

  const checkVariant = event => {
    if (event.propStyle.variant === "borderline") {
      return "transparent";
    } else if (event.propStyle.backgroundColor) {
      return event.propStyle.backgroundColor;
    } else {
      return "#003A61";
    }
  };

  const styleCheck = {
    color: "white",
    border: "none",
    fontWeight: "500",
    borderRadius: value.propStyle.variant === "borderline" ? "0px" : "25px",
    backgroundColor: checkVariant(value),
    borderBottom: value.propStyle.variant === "borderline" ? "1px solid #003A61" : null,
    cursor: props.disable ? "not-allowed" : null
  };

  var customStyle = _objectSpread(_objectSpread({}, styleCheck), props.selected);

  (0, _react.useEffect)(e => {
    setKey(value.activeKey);
  }, [value.activeKey]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: "tabs",
    id: props.id,
    disabled: true,
    ref: ref,
    onChange: e => {},
    onClick: e => {
      try {
        props.onClick();
      } catch (error) {}
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.id,
    style: key === props.id ? customStyle : null
  }, /*#__PURE__*/_react.default.createElement("span", null, props.label)));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabsInner;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _tabsContext = require("../../context/tabsContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TabsInner(props) {
  const [activeKey, setActiveKey] = (0, _react.useState)(null);
  const value = (0, _react.useContext)(_tabsContext.TabContext);
  const ref = (0, _react.useRef)(null);
  const [key, setKey] = (0, _react.useState)(false);
  (0, _react.useEffect)(e => {
    console.log(props.children);
  }, [props]);
  const styleCheck = {
    color: "white",
    border: "none",
    fontWeight: "500",
    backgroundColor: "#003A61",
    borderRadius: "25px"
  };
  (0, _react.useEffect)(e => {
    console.log(value);
    setActiveKey(value.activeKey);
  }, [value.activeKey]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: "tabs",
    id: props.id,
    ref: ref,
    onChange: e => {},
    onClick: e => {
      try {
        props.onClick();
      } catch (error) {}
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.id,
    style: activeKey === props.id ? styleCheck : null
  }, /*#__PURE__*/_react.default.createElement("span", null, props.label)));
}
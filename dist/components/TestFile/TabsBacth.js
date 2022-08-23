"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabsBatch;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _tabsContext = require("../../context/tabsContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TabsBatch(props) {
  const [activeKey, setActiveKey] = (0, _react.useState)();
  const value = {
    activeKey,
    setActiveKey
  };
  (0, _react.useEffect)(e => {
    if (props.defaultKey) {
      console.log(props.defaultKey);
      setActiveKey(props.defaultKey);
    }
  }, [props.defaultKey]);
  return /*#__PURE__*/_react.default.createElement(_tabsContext.TabContext.Provider, {
    value: {
      activeKey
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onChange: e => {
      /*           console.log(e.target, e.target.id); */
      setActiveKey(e.target.id);
    },
    id: "tsum-tabs"
  }, props.children));
}
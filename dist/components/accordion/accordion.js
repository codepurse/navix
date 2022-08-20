"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Accordion;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _accordionContext = require("../../context/accordionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Accordion(props) {
  const [count, setCount] = (0, _react.useState)(0);
  (0, _react.useEffect)(e => {
    var _props$children;

    console.log(props);

    if ((_props$children = props.children) !== null && _props$children !== void 0 && _props$children.length) {
      setCount(props.children.length);
    }
  }, [props]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxAccordion"
  }, /*#__PURE__*/_react.default.createElement(_accordionContext.AccordionContext.Provider, {
    value: props
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, (() => {
    if (count > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => {
        var _event$type;

        return (_event$type = event.type) === null || _event$type === void 0 ? void 0 : _event$type.name.includes("AccordionItem");
      }).map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filteredComponent);
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children);
    }
  })())));
}
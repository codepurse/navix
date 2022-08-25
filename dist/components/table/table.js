"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Table.propTypes = {
  fill: _propTypes.PropTypes.bool
};

function Table(props) {
  const [count, setCount] = (0, _react.useState)(0);
  const [countData, setCountData] = (0, _react.useState)(0);
  const [data, setData] = (0, _react.useState)(props === null || props === void 0 ? void 0 : props.children);
  const propStyle = {
    width: props.fill ? "100%" : ""
  };
  (0, _react.useEffect)(e => {
    if (props.children.length > 0) {
      var filteredHeader = props.children.filter(function (element) {
        return element.props.__TYPE === "TblHeader";
      }).length;
      var filteredData = props.children.filter(function (element) {
        return element.props.__TYPE === "TblData";
      }).length;
      setCount(filteredHeader);
      setCountData(filteredData);
    }

    setData(props.children);
    console.log(props.children);
  }, [props.children]);

  const SingleReturn = () => {
    try {
      if (data.props.__TYPE === "TblHeader" || data.props.__TYPE === "TblData") {
        return /*#__PURE__*/_react.default.createElement("tr", null, data);
      }
    } catch (error) {}
  };

  return /*#__PURE__*/_react.default.createElement("table", {
    className: "nvxTable",
    style: propStyle
  }, count > 0 ? /*#__PURE__*/_react.default.createElement("tr", null, props.children.filter(event => event.props.__TYPE === "TblHeader").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: key
  }, filteredComponent))) : "", countData > 0 ? /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, props.children.filter(event => event.props.__TYPE === "TblData").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: key
  }, filteredComponent)))) : "", countData < 1 || count < 1 ? /*#__PURE__*/_react.default.createElement(SingleReturn, null) : "");
}
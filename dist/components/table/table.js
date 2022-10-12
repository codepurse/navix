"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _ti = require("react-icons/ti");

var _styleIt = _interopRequireDefault(require("style-it"));

var _loadingTable = _interopRequireDefault(require("./loadingTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TABLE_VARIANT = ["striped", "basic"];
const TABLE_LAYOUT = ["auto", "fixed"];
Table.propTypes = {
  data: _propTypes.PropTypes.array,
  columns: _propTypes.PropTypes.array,
  variant: _propTypes.PropTypes.oneOf(TABLE_VARIANT),
  stripedColor: _propTypes.PropTypes.string,
  onSortChange: _propTypes.PropTypes.func,
  layout: _propTypes.PropTypes.oneOf(TABLE_LAYOUT),
  className: _propTypes.PropTypes.string,
  emptyText: _propTypes.PropTypes.bool,
  _styleHeader: _propTypes.PropTypes.array,
  rowClick: _propTypes.PropTypes.func,
  style: _propTypes.PropTypes.array,
  isLoading: _propTypes.PropTypes.bool,
  styleComponents: _propTypes.PropTypes.array,
  loadingCount: _propTypes.PropTypes.number
};
Table.defaultProps = {
  data: [],
  columns: [],
  variant: "basic",
  onSortChange: () => {},
  layout: "auto",
  emptyText: false,
  className: "",
  _styleHeader: [],
  rowClick: () => {},
  style: [],
  styleComponents: [],
  isLoading: false
};

function Table(props) {
  var _props$stripedColor, _props$loadingCount;

  const [sortBy, setSortBy] = (0, _react.useState)("");
  const [orderBy, setOrderBy] = (0, _react.useState)("");
  const [dataTable, setData] = (0, _react.useState)([]);
  const [origData, setOrigData] = (0, _react.useState)([]);
  (0, _react.useEffect)(e => {
    props.onSortChange({
      order: orderBy,
      sortby: sortBy
    });
  }, [orderBy]);
  (0, _react.useEffect)(e => {
    setData(props.data);
    setOrigData(props.data.slice());
  }, [props]);

  const propsStyle = _objectSpread({
    tableLayout: props.layout
  }, props === null || props === void 0 ? void 0 : props.style);

  return _styleIt.default.it("\n    tr:nth-child(even) {\n        background-color: ".concat(props.variant === "striped" ? "".concat((_props$stripedColor = props.stripedColor) !== null && _props$stripedColor !== void 0 ? _props$stripedColor : "#f5f5f5") : "", "\n      }\n      ").concat(props === null || props === void 0 ? void 0 : props.styleComponents, "\n    "), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", {
    className: "nvxTable " + props.className,
    style: propsStyle
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, props.columns.map((data, i) => /*#__PURE__*/_react.default.createElement("th", {
    key: i,
    style: data._style ? data._style : props !== null && props !== void 0 && props._styleHeader ? props === null || props === void 0 ? void 0 : props._styleHeader : ""
  }, data.headerName, " ", data !== null && data !== void 0 && data.sortable ? /*#__PURE__*/_react.default.createElement("i", {
    className: "nvxTableSortIcon",
    onClick: e => {
      setSortBy(data.key);

      if (sortBy === "" || sortBy !== data.key) {
        setOrderBy("asc");
        const strAscending = [...dataTable].sort((a, b) => a[data.key] > b[data.key] ? 1 : -1);
        setData(strAscending);
      } else {
        if (orderBy === "asc") {
          setOrderBy("desc");
          const strDescending = [...dataTable].sort((a, b) => a[data.key] > b[data.key] ? -1 : 1);
          setData(strDescending);
        } else if (orderBy === "desc") {
          setOrderBy("");
          setSortBy("");
          setData(origData);
        } else {
          setOrderBy("asc");
          const strAscending = [...dataTable].sort((a, b) => a[data.key] > b[data.key] ? 1 : -1);
          setData(strAscending);
        }
      }
    }
  }, sortBy !== data.key ? /*#__PURE__*/_react.default.createElement(_ti.TiArrowUnsorted, null) : orderBy === "asc" ? /*#__PURE__*/_react.default.createElement(_ti.TiArrowSortedUp, null) : /*#__PURE__*/_react.default.createElement(_ti.TiArrowSortedDown, null)) : "")))), /*#__PURE__*/_react.default.createElement("tbody", null, dataTable.map((data, i) => {
    var _props$columns;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i,
      onClick: e => {
        props.rowClick(data);
      }
    }, props === null || props === void 0 ? void 0 : (_props$columns = props.columns) === null || _props$columns === void 0 ? void 0 : _props$columns.map((col, j) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        style: data === null || data === void 0 ? void 0 : data._style
      }, typeof data[col.key] === "function" ? /*#__PURE__*/_react.default.createElement(data[col.key], {
        data: data
      }) : data[col.key]);
    }));
  }), dataTable.length === 0 ? props !== null && props !== void 0 && props.emptyText ? /*#__PURE__*/_react.default.createElement("p", {
    className: "nvxTableEmpty"
  }, "No data found") : "" : "", props.isLoading ? /*#__PURE__*/_react.default.createElement(_loadingTable.default, {
    count: (_props$loadingCount = props.loadingCount) !== null && _props$loadingCount !== void 0 ? _props$loadingCount : props.columns.length
  }) : null))));
}
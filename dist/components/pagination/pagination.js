"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PaginationHooks;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _io = require("react-icons/io");

var _io2 = require("react-icons/io5");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PAGINATION_SHAPE = ["rounded", "box"];
PaginationHooks.propTypes = {
  totalRecords: _propTypes.default.number.isRequired,
  pageLimit: _propTypes.default.number,
  initialPage: _propTypes.default.number,
  pagesToShow: _propTypes.default.number,
  onPageChange: _propTypes.default.func,
  type: _propTypes.default.string,
  shape: _propTypes.default.oneOf(PAGINATION_SHAPE),
  borderless: _propTypes.default.bool,
  style: _propTypes.default.array,
  selectedStyle: _propTypes.default.array,
  withArrow: _propTypes.default.bool,
  wrapperClassName: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
PaginationHooks.defaultProps = {
  onPageChange: () => {},
  initialPage: 1,
  shape: "box",
  borderless: false,
  withArrow: true,
  disabled: false
};

function PaginationHooks(props) {
  var _props$borderless;

  const [totalRecords, setTotalRecords] = (0, _react.useState)("");
  const [pageLimit, setPageLimit] = (0, _react.useState)("");
  const [totalPages, setTotalPages] = (0, _react.useState)("");
  const [currentPage, setCurrentPage] = (0, _react.useState)("");
  const [pagesToShow, setPagetoShow] = (0, _react.useState)("");
  (0, _react.useEffect)(e => {
    setTotalRecords(props.totalRecords);
    setPageLimit(props.pageLimit || 1);
    setTotalPages(Math.ceil(props.totalRecords / props.pageLimit));
    setPagetoShow(props.pageToShow || 5);
    setCurrentPage(props.initialPage || 1);
  }, []);

  const setPage = page => {
    var x = page;

    if (x < 1) {
      x = 1;
    } else if (x > totalPages) {
      x = totalPages;
    }

    setCurrentPage(x);
    var startIndex = (x = 1) * pageLimit;
    var endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    try {
      props.onPageChange({
        pageLimit,
        totalPages,
        page,
        startIndex,
        endIndex
      });
    } catch (error) {}
  };

  const getPager = () => {
    var total = totalPages;
    var pagestoshow = pagesToShow;
    var currentpage = currentPage;
    var totalpages = totalPages;
    var pages = [];
    var startFromNumber = "";

    if (totalpages <= pagestoshow) {
      startFromNumber = 1;
      pagestoshow = totalpages;
    } else {
      if (currentpage <= Math.ceil(pagestoshow / 2)) {
        startFromNumber = 1;
      } else if (currentpage + Math.floor((pagestoshow - 1) / 2) >= totalpages) {
        startFromNumber = totalpages - (pagestoshow - 1);
      } else {
        startFromNumber = currentpage - Math.floor(pagestoshow / 2);
      }
    }

    for (let i = 1; i <= pagestoshow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentpage,
      totalpages,
      pages,
      total
    };
  };

  function setClassName(e) {
    switch (e) {
      case "filled":
        return "nvxActiveFilled";

      default:
        return "nvxActive";
    }
  }

  const propsStyle = _objectSpread({
    border: (_props$borderless = props.borderless) !== null && _props$borderless !== void 0 ? _props$borderless : "0px",
    borderRadius: props.shape === "rounded" ? "50px" : ""
  }, props.style);

  return /*#__PURE__*/_react.default.createElement("div", null, (() => {
    if (!totalRecords || totalPages === 1) {
      return null;
    } else {
      var _getPager$pages;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "nvxPagination " + (props === null || props === void 0 ? void 0 : props.wrapperClassName)
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "nvxUlPagination"
      }, props.withArrow ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
        className: "vertical-align",
        style: propsStyle,
        disabled: getPager().currentpage === 1 ? true : false,
        onClick: () => {
          setPage(1);
        }
      }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_io.IoMdSkipBackward, null)))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
        className: "vertical-align",
        style: propsStyle,
        disabled: getPager().currentPage === 1 ? true : false,
        onClick: () => setPage(getPager().currentpage - 1)
      }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_io2.IoCaretBackOutline, null))))) : null, (_getPager$pages = getPager().pages) === null || _getPager$pages === void 0 ? void 0 : _getPager$pages.map((page, index) => /*#__PURE__*/_react.default.createElement("li", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("button", {
        style: (propsStyle, getPager().currentpage === page ? props === null || props === void 0 ? void 0 : props.selectedStyle : null),
        className: getPager().currentpage === page ? setClassName(props.type) : "",
        onClick: () => {
          setPage(page);
        }
      }, page))), props.withArrow ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
        style: propsStyle,
        className: "vertical-align",
        disabled: currentPage === totalPages ? true : false,
        onClick: () => setPage(currentPage + 1)
      }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_io2.IoCaretForward, null)))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
        style: propsStyle,
        className: "vertical-align",
        disabled: currentPage === totalPages ? true : false,
        onClick: () => setPage(totalPages)
      }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_io.IoMdSkipForward, null))))) : null));
    }
  })());
}
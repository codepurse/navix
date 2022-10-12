"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

const _excluded = ["style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Box.propTypes = {
  bgColor: _propTypes.PropTypes.string,
  br: _propTypes.PropTypes.number,
  color: _propTypes.PropTypes.string,
  p: _propTypes.PropTypes.any,
  // padding
  pl: _propTypes.PropTypes.string,
  // paddingleft
  pr: _propTypes.PropTypes.string,
  // paddingRight
  pt: _propTypes.PropTypes.any,
  // paddingTop
  pb: _propTypes.PropTypes.any,
  //paddingBottom
  w: _propTypes.PropTypes.any,
  // width
  h: _propTypes.PropTypes.any,
  // height
  minH: _propTypes.PropTypes.any,
  // minHeight
  maxH: _propTypes.PropTypes.any,
  // maxHeight
  m: _propTypes.PropTypes.string,
  // margin
  ml: _propTypes.PropTypes.any,
  // marginLeft
  mr: _propTypes.PropTypes.any,
  // marginRight
  mt: _propTypes.PropTypes.any,
  // marginTop
  mb: _propTypes.PropTypes.any,
  // marginBottom
  overflow: _propTypes.PropTypes.any,
  overflowX: _propTypes.PropTypes.any,
  overflowY: _propTypes.PropTypes.any,
  display: _propTypes.PropTypes.any,
  bgGradient: _propTypes.PropTypes.any,
  border: _propTypes.PropTypes.any,
  borderWidth: _propTypes.PropTypes.any,
  borderColor: _propTypes.PropTypes.any,
  borderTop: _propTypes.PropTypes.any,
  borderBottom: _propTypes.PropTypes.any,
  borderLeft: _propTypes.PropTypes.any,
  borderRight: _propTypes.PropTypes.any,
  vAlign: _propTypes.PropTypes.any,
  gap: _propTypes.PropTypes.any,
  rowGap: _propTypes.PropTypes.any,
  flex: _propTypes.PropTypes.any,
  flexGrow: _propTypes.PropTypes.any,
  flexWrap: _propTypes.PropTypes.any,
  justifyItems: _propTypes.PropTypes.any,
  justifyContent: _propTypes.PropTypes.any,
  order: _propTypes.PropTypes.any,
  flexShrink: _propTypes.PropTypes.any,
  visibility: _propTypes.PropTypes.any,
  wordBreak: _propTypes.PropTypes.any,
  cursor: _propTypes.PropTypes.any,
  pointerEvents: _propTypes.PropTypes.any,
  float: _propTypes.PropTypes.any,
  boxSize: _propTypes.PropTypes.any,
  background: _propTypes.PropTypes.any,
  boxShadow: _propTypes.PropTypes.any,
  backdropFilter: _propTypes.PropTypes.any,
  color: _propTypes.PropTypes.any,
  columnCount: _propTypes.PropTypes.number,
  columnGap: _propTypes.PropTypes.string
};

function Box(props) {
  const [filterStyle, setFilterStyle] = (0, _react.useState)([]);

  var {
    style
  } = props,
      other = _objectWithoutProperties(props, _excluded);

  const propsStyle = _objectSpread({
    width: props === null || props === void 0 ? void 0 : props.w,
    height: props === null || props === void 0 ? void 0 : props.h,
    padding: props === null || props === void 0 ? void 0 : props.p,
    paddingLeft: props === null || props === void 0 ? void 0 : props.pl,
    paddingRight: props === null || props === void 0 ? void 0 : props.pr,
    paddingTop: props === null || props === void 0 ? void 0 : props.pt,
    paddingBottom: props === null || props === void 0 ? void 0 : props.pb,
    minHeight: props === null || props === void 0 ? void 0 : props.minH,
    maxHeight: props === null || props === void 0 ? void 0 : props.maxH,
    margin: props === null || props === void 0 ? void 0 : props.margin,
    marginTop: props === null || props === void 0 ? void 0 : props.mt,
    background: props === null || props === void 0 ? void 0 : props.background,
    backgroundColor: props === null || props === void 0 ? void 0 : props.bgColor,
    marginBottom: props === null || props === void 0 ? void 0 : props.mb,
    overflow: props === null || props === void 0 ? void 0 : props.overflow,
    overflowX: props === null || props === void 0 ? void 0 : props.overflowX,
    overflowY: props === null || props === void 0 ? void 0 : props.overflowY,
    dp: props === null || props === void 0 ? void 0 : props.display,
    backgroundImage: props === null || props === void 0 ? void 0 : props.bgGradient,
    borderRadius: props === null || props === void 0 ? void 0 : props.br,
    border: props === null || props === void 0 ? void 0 : props.border,
    borderWidth: props === null || props === void 0 ? void 0 : props.borderWidth,
    borderColor: props === null || props === void 0 ? void 0 : props.borderColor,
    borderTop: props === null || props === void 0 ? void 0 : props.borderTop,
    borderBottom: props === null || props === void 0 ? void 0 : props.borderBottom,
    borderLeft: props === null || props === void 0 ? void 0 : props.borderLeft,
    borderRight: props === null || props === void 0 ? void 0 : props.borderRight,
    verticalAlign: props === null || props === void 0 ? void 0 : props.vAlign,
    flex: props === null || props === void 0 ? void 0 : props.flex,
    gap: props === null || props === void 0 ? void 0 : props.gap,
    rowGap: props === null || props === void 0 ? void 0 : props.rowGap,
    flexDirection: props === null || props === void 0 ? void 0 : props.flexDirection,
    flexGrow: props === null || props === void 0 ? void 0 : props.flexGrow,
    flexWrap: props === null || props === void 0 ? void 0 : props.flexWrap,
    order: props === null || props === void 0 ? void 0 : props.order,
    flexShrink: props === null || props === void 0 ? void 0 : props.flexShrink,
    pointerEvents: props === null || props === void 0 ? void 0 : props.pointerEvents,
    visibility: props === null || props === void 0 ? void 0 : props.visibility,
    wordBreak: props === null || props === void 0 ? void 0 : props.wordBreak,
    cursor: props === null || props === void 0 ? void 0 : props.cursor,
    float: props === null || props === void 0 ? void 0 : props.float,
    boxSize: props === null || props === void 0 ? void 0 : props.boxSize,
    boxShadow: props === null || props === void 0 ? void 0 : props.boxShadow,
    backdropFilter: props === null || props === void 0 ? void 0 : props.backdropFilter,
    columnCount: props === null || props === void 0 ? void 0 : props.columnCount,
    columnGap: props === null || props === void 0 ? void 0 : props.columnGap,
    fontSize: props === null || props === void 0 ? void 0 : props.fontSize,
    textAlign: props === null || props === void 0 ? void 0 : props.alignText,
    fontWeight: props === null || props === void 0 ? void 0 : props.fontWeight,
    color: props === null || props === void 0 ? void 0 : props.color
  }, style);

  (0, _react.useEffect)(e => {
    Object.keys(propsStyle).forEach(key => {
      if (propsStyle[key] === undefined) {
        delete propsStyle[key];
      }
    });
    setFilterStyle(propsStyle);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: props.className,
    style: filterStyle
  }, other), props.children);
}
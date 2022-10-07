"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

const _excluded = ["style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  w: _propTypes.PropTypes.number,
  // width
  h: _propTypes.PropTypes.number,
  // height
  minH: _propTypes.PropTypes.number,
  // minHeight
  maxH: _propTypes.PropTypes.number,
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
  var _props$background, _props$bgColor, _ref, _props$overflow, _props$overflowX, _props$overflowY, _props$display, _props$bgGradient, _ref2, _props$border, _ref3, _props$borderColor, _ref4, _ref5, _ref6, _ref7, _props$vAlign, _props$flex, _ref8, _ref9, _props$flexDirection, _props$flexGrow, _props$flexWrap, _props$order, _props$flexShrink, _props$pointerEvents, _props$visibility, _props$wordBreak, _props$cursor, _props$float, _props$boxSize, _props$boxShadow, _props$backdropFilter, _props$columnCount, _props$columnGap, _props$fontSize, _props$alignText, _props$fontWeight, _props$color;

  var {
    style
  } = props,
      other = _objectWithoutProperties(props, _excluded);

  const propsStyle = _objectSpread({
    width: (props === null || props === void 0 ? void 0 : props.w) + "px",
    height: (props === null || props === void 0 ? void 0 : props.h) + "px",
    padding: (props === null || props === void 0 ? void 0 : props.p) + "px",
    paddingLeft: (props === null || props === void 0 ? void 0 : props.pl) + "px",
    paddingRight: (props === null || props === void 0 ? void 0 : props.pr) + "px",
    paddingTop: (props === null || props === void 0 ? void 0 : props.pt) + "px",
    paddingBottom: (props === null || props === void 0 ? void 0 : props.pb) + "px",
    minHeight: (props === null || props === void 0 ? void 0 : props.minH) + "px",
    maxHeight: (props === null || props === void 0 ? void 0 : props.maxH) + "px",
    margin: (props === null || props === void 0 ? void 0 : props.margin) + "px",
    marginTop: (props === null || props === void 0 ? void 0 : props.mt) + "px",
    background: (_props$background = props === null || props === void 0 ? void 0 : props.background) !== null && _props$background !== void 0 ? _props$background : null,
    backgroundColor: (_props$bgColor = props === null || props === void 0 ? void 0 : props.bgColor) !== null && _props$bgColor !== void 0 ? _props$bgColor : null,
    marginBottom: (_ref = (props === null || props === void 0 ? void 0 : props.mb) + "px") !== null && _ref !== void 0 ? _ref : null,
    overflow: (_props$overflow = props === null || props === void 0 ? void 0 : props.overflow) !== null && _props$overflow !== void 0 ? _props$overflow : null,
    overflowX: (_props$overflowX = props === null || props === void 0 ? void 0 : props.overflowX) !== null && _props$overflowX !== void 0 ? _props$overflowX : null,
    overflowY: (_props$overflowY = props === null || props === void 0 ? void 0 : props.overflowY) !== null && _props$overflowY !== void 0 ? _props$overflowY : null,
    dp: (_props$display = props === null || props === void 0 ? void 0 : props.display) !== null && _props$display !== void 0 ? _props$display : null,
    backgroundImage: (_props$bgGradient = props === null || props === void 0 ? void 0 : props.bgGradient) !== null && _props$bgGradient !== void 0 ? _props$bgGradient : null,
    borderRadius: (_ref2 = (props === null || props === void 0 ? void 0 : props.br) + "px") !== null && _ref2 !== void 0 ? _ref2 : null,
    border: (_props$border = props === null || props === void 0 ? void 0 : props.border) !== null && _props$border !== void 0 ? _props$border : null,
    borderWidth: (_ref3 = (props === null || props === void 0 ? void 0 : props.borderWidth) + "px") !== null && _ref3 !== void 0 ? _ref3 : null,
    borderColor: (_props$borderColor = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _props$borderColor !== void 0 ? _props$borderColor : null,
    borderTop: (_ref4 = (props === null || props === void 0 ? void 0 : props.borderTop) + "px") !== null && _ref4 !== void 0 ? _ref4 : null,
    borderBottom: (_ref5 = (props === null || props === void 0 ? void 0 : props.borderBottom) + "px") !== null && _ref5 !== void 0 ? _ref5 : null,
    borderLeft: (_ref6 = (props === null || props === void 0 ? void 0 : props.borderLeft) + "px") !== null && _ref6 !== void 0 ? _ref6 : null,
    borderRight: (_ref7 = (props === null || props === void 0 ? void 0 : props.borderRight) + "px") !== null && _ref7 !== void 0 ? _ref7 : null,
    verticalAlign: (_props$vAlign = props === null || props === void 0 ? void 0 : props.vAlign) !== null && _props$vAlign !== void 0 ? _props$vAlign : null,
    flex: (_props$flex = props === null || props === void 0 ? void 0 : props.flex) !== null && _props$flex !== void 0 ? _props$flex : null,
    gap: (_ref8 = (props === null || props === void 0 ? void 0 : props.gap) + "px") !== null && _ref8 !== void 0 ? _ref8 : null,
    rowGap: (_ref9 = (props === null || props === void 0 ? void 0 : props.rowGap) + "px") !== null && _ref9 !== void 0 ? _ref9 : null,
    flexDirection: (_props$flexDirection = props === null || props === void 0 ? void 0 : props.flexDirection) !== null && _props$flexDirection !== void 0 ? _props$flexDirection : null,
    flexGrow: (_props$flexGrow = props === null || props === void 0 ? void 0 : props.flexGrow) !== null && _props$flexGrow !== void 0 ? _props$flexGrow : null,
    flexWrap: (_props$flexWrap = props === null || props === void 0 ? void 0 : props.flexWrap) !== null && _props$flexWrap !== void 0 ? _props$flexWrap : null,
    order: (_props$order = props === null || props === void 0 ? void 0 : props.order) !== null && _props$order !== void 0 ? _props$order : null,
    flexShrink: (_props$flexShrink = props === null || props === void 0 ? void 0 : props.flexShrink) !== null && _props$flexShrink !== void 0 ? _props$flexShrink : null,
    pointerEvents: (_props$pointerEvents = props === null || props === void 0 ? void 0 : props.pointerEvents) !== null && _props$pointerEvents !== void 0 ? _props$pointerEvents : null,
    visibility: (_props$visibility = props === null || props === void 0 ? void 0 : props.visibility) !== null && _props$visibility !== void 0 ? _props$visibility : null,
    wordBreak: (_props$wordBreak = props === null || props === void 0 ? void 0 : props.wordBreak) !== null && _props$wordBreak !== void 0 ? _props$wordBreak : null,
    cursor: (_props$cursor = props === null || props === void 0 ? void 0 : props.cursor) !== null && _props$cursor !== void 0 ? _props$cursor : null,
    float: (_props$float = props === null || props === void 0 ? void 0 : props.float) !== null && _props$float !== void 0 ? _props$float : null,
    boxSize: (_props$boxSize = props === null || props === void 0 ? void 0 : props.boxSize) !== null && _props$boxSize !== void 0 ? _props$boxSize : null,
    boxShadow: (_props$boxShadow = props === null || props === void 0 ? void 0 : props.boxShadow) !== null && _props$boxShadow !== void 0 ? _props$boxShadow : null,
    backdropFilter: (_props$backdropFilter = props === null || props === void 0 ? void 0 : props.backdropFilter) !== null && _props$backdropFilter !== void 0 ? _props$backdropFilter : null,
    columnCount: (_props$columnCount = props === null || props === void 0 ? void 0 : props.columnCount) !== null && _props$columnCount !== void 0 ? _props$columnCount : null,
    columnGap: (_props$columnGap = props === null || props === void 0 ? void 0 : props.columnGap) !== null && _props$columnGap !== void 0 ? _props$columnGap : null,
    fontSize: (_props$fontSize = props === null || props === void 0 ? void 0 : props.fontSize) !== null && _props$fontSize !== void 0 ? _props$fontSize : null,
    textAlign: (_props$alignText = props === null || props === void 0 ? void 0 : props.alignText) !== null && _props$alignText !== void 0 ? _props$alignText : null,
    fontWeight: (_props$fontWeight = props === null || props === void 0 ? void 0 : props.fontWeight) !== null && _props$fontWeight !== void 0 ? _props$fontWeight : null,
    color: (_props$color = props === null || props === void 0 ? void 0 : props.color) !== null && _props$color !== void 0 ? _props$color : null
  }, style);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: props.className,
    style: propsStyle
  }, other), props.children);
}
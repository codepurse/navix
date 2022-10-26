"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Drawer;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../box/box"));

var _drawerFunctions = require("./drawerFunctions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DRAWER_SIZES = ["xl", "lg", "sm", "md", "xs"];
Drawer.propTypes = {
  show: _propTypes.PropTypes.bool,
  size: _propTypes.PropTypes.oneOf(DRAWER_SIZES),
  className: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  enableOverlay: _propTypes.PropTypes.bool,
  overlayOpacity: _propTypes.PropTypes.number,
  overlayColor: _propTypes.PropTypes.string,
  overlayBlur: _propTypes.PropTypes.number,
  animnationSpeed: _propTypes.PropTypes.string,
  onClose: _propTypes.PropTypes.func
};
Drawer.defaultProps = {
  show: false,
  size: "md",
  enableOverlay: true,
  overlayColor: "73, 67, 67",
  overlayOpacity: "0.25",
  overlayBlur: "2.5px",
  animationSpeed: "var(--animation-faster)",
  onClose: () => {}
};

function Drawer(props) {
  const style = _objectSpread(_objectSpread({}, (0, _drawerFunctions.drawerPosition)(props.position, (0, _drawerFunctions.drawerSize)(props.size))), {}, {
    transition: "all ".concat(props.animationSpeed)
  }, props.style);

  const drawerClassName = (0, _classnames.default)("nvxDrawerWrapper", props.className, (0, _drawerFunctions.drawerClass)(props.position));
  const styleOverlay = {
    display: props.show ? "block" : "none",
    background: "rgba(".concat(props.overlayColor, ", ").concat(props.overlayOpacity, ")"),
    backdropFilter: "blur(".concat(props.overlayBlur + "px", ")")
  };

  _react.default.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      props.onClose();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.enableOverlay ? /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "nvxDrawerOverlay",
    style: styleOverlay,
    onClick: e => {
      props.onClose();
    }
  }) : null, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: drawerClassName,
    style: props.show ? style : "",
    onClick: e => {
      console.log(e);
    }
  }, props.children));
}
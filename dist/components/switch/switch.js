"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Switch.propTypes = {
  checked: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  checkedBgColor: _propTypes.PropTypes.string,
  backgroundColor: _propTypes.PropTypes.string,
  onChange: _propTypes.PropTypes.func,
  onClick: _propTypes.PropTypes.func,
  id: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  labelLeft: _propTypes.PropTypes.string,
  labelRight: _propTypes.PropTypes.string,
  labelBottom: _propTypes.PropTypes.string,
  labelTop: _propTypes.PropTypes.string
};
Switch.defaultProps = {
  disabled: false,
  onClick: () => {},
  onChange: () => {}
};

function Switch(props) {
  const [check, setCheck] = (0, _react.useState)(false);
  const propsStyle = {
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : "",
    backgroundColor: props.backgroundColor ? props.backgroundColor : null
  };
  const propsCheckStyle = {
    backgroundColor: props.checkedBgColor ? props.checkedBgColor : null
  };
  (0, _react.useEffect)(e => {
    if ((props === null || props === void 0 ? void 0 : props.checked) === true || (props === null || props === void 0 ? void 0 : props.checked) === false) {
      setCheck(props.checked);
    } else {}
  }, [props.checked]);
  const firstRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      props.onChange(check);
    }
  }, [check]);
  return _styleIt.default.it("\n    input:checked + .slider:before {\n      transform: translateX(27px);\n      background: ".concat(check ? props === null || props === void 0 ? void 0 : props.checkedCaretColor : "white", ";\n    }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxWrapperParentChk"
  }, props !== null && props !== void 0 && props.topLabel ? /*#__PURE__*/_react.default.createElement("label", {
    className: "nvxCheckTop"
  }, "test") : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "vertical-center nvxWrapperInnerChk"
  }, props !== null && props !== void 0 && props.leftLabel ? /*#__PURE__*/_react.default.createElement("span", {
    className: "nvxCheckLeft"
  }, props === null || props === void 0 ? void 0 : props.leftLabel) : null, /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: check,
    disabled: props.disabled,
    onClick: e => {
      props === null || props === void 0 ? void 0 : props.onClick();
    },
    onChange: e => {
      if ((props === null || props === void 0 ? void 0 : props.checked) === true || (props === null || props === void 0 ? void 0 : props.checked) === false) {} else {
        setCheck(e.currentTarget.checked);
      }
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider",
    style: _objectSpread(_objectSpread({}, propsStyle), check ? propsCheckStyle : "")
  })), props !== null && props !== void 0 && props.rightLabel ? /*#__PURE__*/_react.default.createElement("span", {
    className: "nvxCheckRight"
  }, props === null || props === void 0 ? void 0 : props.rightLabel) : null), props !== null && props !== void 0 && props.bottomLabel ? /*#__PURE__*/_react.default.createElement("label", {
    className: "nvxCheckBottom"
  }, "test") : null));
}
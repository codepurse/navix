"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

require("core-js/modules/web.dom-collections.iterator.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Checkbox.propTypes = {
  label: _propTypes.PropTypes.string,
  checked: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  backDrop: _propTypes.PropTypes.string,
  onChange: _propTypes.PropTypes.func,
  error: _propTypes.PropTypes.bool
};

function Checkbox(props) {
  var _props$css;

  const [check, setCheck] = (0, _react.useState)(false);
  const ref = (0, _react.useRef)("");
  var propsStyle = {
    backgroundColor: props.disabled && "lightgray",
    border: props.error ? "2px solid #ff5f5f" : "1px solid #E0E0E0"
  };
  const customProps = {
    boxShadow: props.backDrop ? "-200px -200px 5px 200px ".concat(props.backDrop, " inset") : null
  };

  var customStyle = _objectSpread(_objectSpread({}, propsStyle), customProps);

  const checkboxClassName = (0, _classnames.default)("checkbox bounce", props.className, {
    nvxCbxDisable: props.disabled === true
  }, {
    nvxCbxError: props.error === true
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxCbx"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: checkboxClassName
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    ref: ref,
    defaultChecked: props.checked,
    disabled: props.disabled,
    onChange: e => {
      if (e.currentTarget.checked) {
        setCheck(true);
      } else {
        setCheck(false);
      }

      try {
        props.onChange(e);
      } catch (error) {}
    },
    style: check ? customStyle : propsStyle
  }), /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 21 21"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "5 10.75 8.5 14.25 16 6"
  })), /*#__PURE__*/_react.default.createElement("span", {
    style: (_props$css = props.css) === null || _props$css === void 0 ? void 0 : _props$css.checkbox.label
  }, props.label)));
}
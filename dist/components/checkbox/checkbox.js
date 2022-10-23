"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

require("core-js/modules/web.dom-collections.iterator.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

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
  error: _propTypes.PropTypes.bool,
  color: _propTypes.PropTypes.string,
  checkedBgColor: _propTypes.PropTypes.string,
  labelStyle: _propTypes.PropTypes.string,
  background: _propTypes.PropTypes.string,
  checkedCaretColor: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.string,
  positionLabel: _propTypes.PropTypes.string
};
Checkbox.defaultProps = {
  size: "sm",
  onChange: () => {},
  disabled: false,
  error: false,
  positionLabel: "right"
};

function Checkbox(props) {
  var _props$background, _props$checkedBgColor, _props$checkedCaretCo;

  const [check, setCheck] = (0, _react.useState)(false);
  const rndId = Math.floor((1 + Math.random()) * 0x10000);
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

  const checkboxSize = value => {
    switch (value) {
      case "md":
        return "nvxCbxMd";

      case "lg":
        return "nvxCbxLg";

      default:
        return "";
    }
  };

  (0, _react.useEffect)(e => {
    if ((props === null || props === void 0 ? void 0 : props.checked) === true || (props === null || props === void 0 ? void 0 : props.checked) === false) {
      setCheck(props.checked);
    } else {}
  }, [props.checked]);
  return _styleIt.default.it("\n    .nvxCbx .checkbox input  {\n      background: ".concat((_props$background = props === null || props === void 0 ? void 0 : props.background) !== null && _props$background !== void 0 ? _props$background : "white", ";\n      }\n      .nvxCbx .checkbox input:checked {\n        box-shadow: inset 10px 10px 0px 191px ").concat((_props$checkedBgColor = props === null || props === void 0 ? void 0 : props.checkedBgColor) !== null && _props$checkedBgColor !== void 0 ? _props$checkedBgColor : "var(--blue-600)", "\n     }\n     .nvxCbx .checkbox.bounce {\n      --stroke: ").concat((_props$checkedCaretCo = props === null || props === void 0 ? void 0 : props.checkedCaretColor) !== null && _props$checkedCaretCo !== void 0 ? _props$checkedCaretCo : "white", ";\n   }\n   \n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxCbx " + checkboxSize(props === null || props === void 0 ? void 0 : props.size)
  }, props.positionLabel === "left" ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: rndId,
    style: (props !== null && props !== void 0 && props.labelStyle, {
      marginRight: "10px",
      marginLeft: "0px"
    })
  }, props.label) : null, /*#__PURE__*/_react.default.createElement("label", {
    className: checkboxClassName
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    ref: ref,
    id: rndId,
    checked: check,
    disabled: props.disabled,
    onChange: e => {
      if ((props === null || props === void 0 ? void 0 : props.checked) === true || (props === null || props === void 0 ? void 0 : props.checked) === false) {} else {
        setCheck(e.currentTarget.checked);
      }

      try {
        props.onChange(e.currentTarget.checked);
      } catch (error) {}
    },
    style: check ? customStyle : propsStyle
  }), /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 21 21"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "5 10.75 8.5 14.25 16 6"
  }))), props.positionLabel === "right" ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: rndId,
    style: (props !== null && props !== void 0 && props.labelStyle, {
      marginLeft: "10px"
    })
  }, props.label) : null));
}
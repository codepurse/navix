"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Textbox;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.string.replace.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

var _textStyles = require("./textStyles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TEXT_SIZES = ["lg", "sm", "md"];
const TEXT_ALIGN_TEST = ["left", "center", "right"];
Textbox.propTypes = {
  placeholder: _propTypes.PropTypes.string,
  fill: _propTypes.PropTypes.bool,
  iconLeft: _propTypes.PropTypes.node,
  iconRight: _propTypes.PropTypes.node,
  onClick: _propTypes.PropTypes.func,
  disabled: _propTypes.PropTypes.bool,
  size: _propTypes.PropTypes.oneOf(TEXT_SIZES),
  type: _propTypes.PropTypes.string,
  alignText: _propTypes.PropTypes.oneOf(TEXT_ALIGN_TEST),
  onlyNuber: _propTypes.PropTypes.bool,
  onlyLetter: _propTypes.PropTypes.bool,
  value: _propTypes.PropTypes.string,
  fontSize: _propTypes.PropTypes.string,
  max: _propTypes.PropTypes.number,
  min: _propTypes.PropTypes.number,
  isInvalid: _propTypes.PropTypes.bool,
  onKeyPress: _propTypes.PropTypes.func,
  styleLeftIcon: _propTypes.PropTypes.array,
  styleRightIcon: _propTypes.PropTypes.array
};
Textbox.defaultProps = {
  disabled: false,
  fill: false,
  onClick: () => {},
  onKeyPress: () => {},
  size: "md",
  isInvalid: false,
  type: "text",
  styleLeftIcon: [],
  styleRightIcon: []
};

function Textbox(props) {
  const textClassName = (0, _classnames.default)("txtNvxDefault", props.className);
  const [formatStyle, setFormatStyle] = (0, _react.useState)();
  let r = (Math.random() + 1).toString(36).substring(7); // for the sake of chancing style of placeholder

  const numberOnly = event => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const letterOnly = event => {
    if (/[^a-z]/gi.test(event.key)) {
      event.preventDefault();
    }
  };

  const JSToCSS = JS => {
    let cssString = "";

    for (let objectKey in JS) {
      cssString += objectKey.replace(/([A-Z])/g, g => "-".concat(g[0].toLowerCase())) + ": " + JS[objectKey] + ";\n";
    }

    return cssString;
  };

  (0, _react.useEffect)(e => {
    setFormatStyle(JSToCSS(props.stylePlaceholder));
  }, []);
  const propsStyle = {
    borderColor: (0, _textStyles.borderType)(props.type),
    width: props.fill && "100%",
    textAlign: props.alignText ? props.alignText : "",
    paddingLeft: props.iconLeft ? "35px" : null,
    paddingRight: props.iconRight ? "35px" : null,
    fontSize: props.fontSize ? props.fontSize : (0, _textStyles.textSize)(props.size)
  };

  const customStyle = _objectSpread(_objectSpread({}, propsStyle), props.style);

  return _styleIt.default.it("\n    .".concat(r, "::placeholder {\n      ").concat(formatStyle, "\n    }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper",
    style: {
      width: props.fill && "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    style: customStyle,
    type: props.type,
    disabled: props.disabled && true,
    className: textClassName + " ".concat(r),
    value: props.value,
    maxLength: props.max,
    "data-invalid": props.isInvalid ? "invalid" : "",
    placeholder: props.placeholder,
    minLength: props.min,
    onKeyPress: event => {
      if (props.onlyNuber) {
        numberOnly(event);
      } else if (props.onlyLetter) {
        letterOnly(event);
      }

      props.onKeyPress();
    }
  })), /*#__PURE__*/_react.default.createElement("i", {
    className: "inputIconLeft",
    style: props.styleLeftIcon
  }, props.iconLeft), /*#__PURE__*/_react.default.createElement("i", {
    className: "inputIconRight",
    style: props.styleRightIcon
  }, props.iconRight)));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Radio;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

var _radioContext = require("../../context/radioContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RADIO_SIZES = ["lg", "sm", "md"];
Radio.propTypes = {
  color: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(RADIO_SIZES),
  invalid: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  onChange: _propTypes.PropTypes.func,
  onClick: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.string,
  label: _propTypes.PropTypes.string,
  selected: _propTypes.PropTypes.bool,
  _TYPE: _propTypes.PropTypes.string
};
Radio.defaultProps = {
  __TYPE: "Radio",
  onClick: () => {},
  onChange: () => {}
};

function Radio(props) {
  const value = (0, _react.useContext)(_radioContext.RadioContext);
  const [active, setActive] = (0, _react.useState)("1");
  const propsStyle = {
    borderColor: "red",
    cursor: props.disabled ? "not-allowed" : "",
    color: props.disabled ? "gray" : ""
  };
  (0, _react.useEffect)(e => {
    if (active !== value.default) {
      setActive(value.default);
    } else {}
  }, [value.default]);
  (0, _react.useEffect)(e => {
    try {
      document.getElementById(active).checked = true;
    } catch (error) {}
  }, [active]);

  const radioSize = value => {
    switch (value) {
      case "md":
        return "nvxRadioMd";

      case "lg":
        return "nvxRadioLg";

      default:
        return "";
    }
  };

  return _styleIt.default.it("\n    .nvxRadio + .nvxRadioLabel::before  {\n      border: 1px solid ".concat(props !== null && props !== void 0 && props.color ? props === null || props === void 0 ? void 0 : props.color : "#00679d", ";\n      }\n    .nvxRadio + .nvxRadioLabel::after {\n      border: 1px solid ").concat(props === null || props === void 0 ? void 0 : props.color, ";\n      background: ").concat(props !== null && props !== void 0 && props.color ? props.color : "#00679d", ";\n      }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxRadioDiv"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "nvxRadio " + radioSize(props.size),
    type: "radio",
    id: props.value,
    name: value.name,
    onClick: e => {
      setActive(props.value);
    },
    disabled: props.disabled ? true : false,
    onChange: e => {
      setActive(props.value);
      props.onChange(e.currentTarget.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: props.invalid ? "nvxRadioLabel nvxRadioLblInvalid" : "nvxRadioLabel",
    id: props.disabled ? "nvxRadioLblInvalid" : "",
    style: propsStyle,
    htmlFor: props.value
  }, props.label)));
}
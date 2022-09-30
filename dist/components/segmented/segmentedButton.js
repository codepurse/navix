"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SegmentedButton;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

SegmentedButton.propTypes = {
  selected: _propTypes.PropTypes.number,
  onSelect: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.array,
  fill: _propTypes.PropTypes.bool,
  className: _propTypes.PropTypes.className,
  onActive: _propTypes.PropTypes.array,
  id: _propTypes.PropTypes.id,
  onChange: _propTypes.PropTypes.func,
  wrapperStyle: _propTypes.PropTypes.array,
  backgroundColor: _propTypes.PropTypes.string,
  elipsis: _propTypes.PropTypes.bool,
  onClick: _propTypes.PropTypes.func
};
SegmentedButton.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  onSelect: () => {},
  elipsis: false
};

function SegmentedButton(props) {
  var _props$value, _props$onActive, _props$onActive2;

  const randomName = Math.random();
  const [id, setId] = (0, _react.useState)(props.value[0].id);
  const propsStyle = {
    cursor: "not-allowed",
    opacity: "0.5"
  };
  (0, _react.useEffect)(e => {
    if (props.selected) {
      setId(props.value[props.selected - 1].id);
    }
  }, [props.selected]);
  const listItems = (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.map((event, i) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: i
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: event.id,
    name: randomName,
    type: "radio",
    disabled: event.disabled ? true : false,
    checked: id === event.id,
    onClick: props.onClick,
    onChange: e => {
      setId(event.id);
      props.onSelect(event.id);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    datacustom: "green",
    htmlFor: event.id,
    style: event.disabled ? propsStyle : null
  }, props.elipsis ? /*#__PURE__*/_react.default.createElement("span", null, event.label) : event.label)));
  return _styleIt.default.it("\n    .segmented-controls label:last-of-type::after  {\n      background-color: ".concat((_props$onActive = props.onActive) === null || _props$onActive === void 0 ? void 0 : _props$onActive.backgroundColor, ";\n      }\n    .segmented-controls input:checked + label {\n        color:  ").concat((_props$onActive2 = props.onActive) === null || _props$onActive2 === void 0 ? void 0 : _props$onActive2.color, ";\n      }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "segmented-controls " + (props === null || props === void 0 ? void 0 : props.className),
    style: props === null || props === void 0 ? void 0 : props.wrapperStyle,
    id: props === null || props === void 0 ? void 0 : props.id
  }, listItems));
}
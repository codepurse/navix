"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SegmentedButton;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

SegmentedButton.propTypes = {
  selected: _propTypes.PropTypes.number,
  onSelect: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.array
};

function SegmentedButton(props) {
  var _props$value;

  const randomName = Math.random();
  const [id, setId] = (0, _react.useState)(props.value[0].id);
  const propsStyle = {
    cursor: "not-allowed"
  };
  const listItems = (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.map((event, i) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: i
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: event.id,
    name: randomName,
    type: "radio",
    disabled: event.disabled ? true : false,
    checked: id === event.id,
    onChange: e => {
      setId(event.id);
      props.onSelect(event.id);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: event.id,
    style: event.disabled ? propsStyle : null
  }, event.label)));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "segmented-controls"
  }, listItems);
}
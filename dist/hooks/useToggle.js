"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToggle;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToggle(defaultValue) {
  const [value, setValue] = (0, _react.useState)(defaultValue);

  function toggleValue(value) {
    setValue(currentValue => typeof value === "boolean" ? value : !currentValue);
  }

  return [value, toggleValue];
}
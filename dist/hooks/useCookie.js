"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useArray;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useArray(defaultValue) {
  const [cookie, setCookie] = (0, _react.useState)(defaultValue);

  function clear() {
    document.cookie = defaultValue + "=; Max-Age=0";
  }

  return {
    cookie,
    clear
  };
}
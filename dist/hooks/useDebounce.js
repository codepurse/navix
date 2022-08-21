"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDebounce;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useDebounce(func, delay) {
  const [timer, setTimer] = (0, _react.useState)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);

    let _temp = setTimeout(() => {
      func(...args);
    }, delay);

    setTimer(_temp);
  };
}
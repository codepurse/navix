"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useArray;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.trim.js");

var _react = require("react");

function useArray(defaultValue) {
  const [array, setArray] = (0, _react.useState)(defaultValue);

  function push(element) {
    setArray(a => [...a, element]);
  }

  function filter(callback) {
    setArray(a => a.filter(callback));
  }

  function update(index, newElement) {
    setArray(a => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  function getCookie(defaultValue) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    setArray(cookie[defaultValue]);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
    getCookie
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useConsole;

var _react = require("react");

function useConsole(dependcies) {
  (0, _react.useEffect)(e => {
    return console.log(dependcies);
  }, [dependcies]);
}
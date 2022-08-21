"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useUpdate;

var _react = require("react");

function useUpdate(callback, dependcies) {
  const firstRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(e => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    return callback();
  }, dependcies);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEventListener;

var _react = require("react");

function useEventListener(eventType, callback) {
  let element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  const callbackRef = (0, _react.useRef)(callback);
  (0, _react.useEffect)(() => {
    callbackRef.current = callback;
  }, [callback]);
  (0, _react.useEffect)(() => {
    if (element == null) return;

    const handler = e => callbackRef.current(e);

    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
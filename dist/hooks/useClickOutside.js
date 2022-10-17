"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useClickOutside;

var _useEventListener = _interopRequireDefault(require("./useEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useClickOutside(ref, cb) {
  (0, _useEventListener.default)("click", e => {
    if (ref.current == null || ref.current.contains(e.target)) return;
    cb(e);
  }, document);
}
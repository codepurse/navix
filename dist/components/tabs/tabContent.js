"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabContent = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxTabContent"
  }, props.children);
};

var _default = TabContent;
exports.default = _default;
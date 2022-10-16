"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavixProvider;

var _navixProvider = require("../../context/navixProvider");

function NavixProvider(props) {
  var _props$theme;

  return /*#__PURE__*/React.createElement(_navixProvider.NavixSource.Provider, {
    value: (_props$theme = props.theme) !== null && _props$theme !== void 0 ? _props$theme : "blue"
  }, props.children);
}
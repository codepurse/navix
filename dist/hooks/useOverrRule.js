"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOverRuleTheme;

var _react = require("react");

function useOverRuleTheme(theme) {
  const setCSSVariables = theme => {
    for (const value in theme) {
      document.documentElement.style.setProperty("--".concat(value), theme[value]);
    }
  };

  (0, _react.useEffect)(e => {
    setCSSVariables(theme);
  }, [theme]);
}
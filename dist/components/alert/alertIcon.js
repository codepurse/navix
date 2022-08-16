"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertType = exports.AlertIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AlertIcon = type => {
  switch (type) {
    case "info":
      return /*#__PURE__*/_react.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: "#76a9fa"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
      }));

    case "success":
      return /*#__PURE__*/_react.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: "var(--toastify-icon-color-success)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
      }));

    case "warning":
      return /*#__PURE__*/_react.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: "var(--toastify-icon-color-warning)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
      }));

    case "error":
      return /*#__PURE__*/_react.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: "#e43f3d"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
      }));

    case "close":
      return /*#__PURE__*/_react.default.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16",
        fill: type === "info" ? "#75a8fb" : type === "success" ? "#31c48e" : type === "warning" ? "#e29f06" : type === "error" ? "#e63e3e" : "gray"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
      }));

    default:
      return /*#__PURE__*/_react.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: "var(--toastify-icon-color-info)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
      }));
  }
};

exports.AlertIcon = AlertIcon;

const AlertType = type => {
  switch (type) {
    case "info":
      return "toastContainer nvxAlertInfo";

    case "success":
      return "toastContainer nvxAlertSuccess";

    case "warning":
      return "toastContainer nvxAlertWarning";

    case "error":
      return "toastContainer nvxAlertError";

    default:
      return "toastContainer";
  }
};

exports.AlertType = AlertType;
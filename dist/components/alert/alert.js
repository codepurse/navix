"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Alert = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/modules/es.array.reverse.js");

var _react = _interopRequireWildcard(require("react"));

var _alertIcon = require("./alertIcon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AlertComponent = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    type,
    message,
    toastData: {
      index,
      removeToast,
      toastOptions: {
        autoClose = true,
        closeDuration = 3000
      }
    }
  } = _ref;
  const progressDuration = autoClose ? closeDuration : false;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _alertIcon.AlertType)(type),
    ref: ref,
    type: type
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toastIcon"
  }, (0, _alertIcon.AlertIcon)(type)), /*#__PURE__*/_react.default.createElement("div", {
    className: "toastMessage"
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "toastClose",
    onClick: () => removeToast(index)
  }, (0, _alertIcon.AlertIcon)("close")));
});
const refs = [];
const availablePostions = ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"];
const initialOptions = {
  reverse: false,
  position: "top-center"
};

const AlertContainer = (_ref2) => {
  let {
    options = initialOptions
  } = _ref2;

  const [toasts, setToasts] = _react.default.useState([]);

  const [removedToasts, setRemovedToasts] = (0, _react.useState)([]);
  const toastPosition = availablePostions.includes(options.position) ? options.position : initialOptions.position;

  const addToast = function addToast(type, message) {
    let toastOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      autoClose: true,
      closeDuration: 3000
    };
    const ref = /*#__PURE__*/(0, _react.createRef)();
    const toastData = {
      index: toasts.length,
      removeToast,
      toastOptions
    };

    const toast = /*#__PURE__*/_react.default.createElement(AlertComponent, {
      type: type,
      message: message,
      toastData: toastData,
      ref: ref
    });

    setToasts([...toasts, toast]);
    refs.push(ref);
    queueMicrotask(() => showToast(Math.max(refs.length - 1, 0)));

    if (toastOptions.closeDuration) {
      setTimeout(() => removeToast(toastData.index), toastOptions.closeDuration);
    }
  };

  const showToast = index => {
    if (index > -1) {
      refs[index].current.classList.add("show");
    }
  };

  const removeToast = index => {
    const ref = refs[index];
    setRemovedToasts([...removedToasts, index]);

    if (ref) {
      ref.current.classList.add("hide");
      refs[index] = null;
    }
  };

  (0, _react.useEffect)(() => {
    Alert.add = addToast;
  }, [toasts, refs]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toastArea".concat(options.reverse ? " reverse" : "", " area-").concat(toastPosition)
  }, toasts.map((toast, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: index
    }, toast);
  }));
};

const Alert = {
  add: null,
  info: (message, options) => Alert.add("info", message, options),
  success: (message, options) => Alert.add("success", message, options),
  warning: (message, options) => Alert.add("warning", message, options),
  error: (message, options) => Alert.add("error", message, options)
};
exports.Alert = Alert;
var _default = AlertContainer;
exports.default = _default;
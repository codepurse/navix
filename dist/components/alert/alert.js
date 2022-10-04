"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;
exports.default = AlertContainer;

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/web.queue-microtask.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _alertIcon = require("./alertIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

AlertContainer.propTypes = {
  stackable: _propTypes.PropTypes.bool,
  position: _propTypes.PropTypes.string,
  reverse: _propTypes.PropTypes.bool,
  duration: _propTypes.PropTypes.number,
  autoClose: _propTypes.PropTypes.bool,
  rendered: _propTypes.PropTypes.node
};
AlertContainer.defaultProps = {
  stackable: true,
  position: "top-center",
  reverse: false,
  duration: 3000,
  autoClose: true
};
const AlertComponent = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    type,
    message,
    children,
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
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children ? /*#__PURE__*/_react.default.createElement("div", {
    ref: ref
  }, children) : /*#__PURE__*/_react.default.createElement("div", {
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
  }, (0, _alertIcon.AlertIcon)("close"))));
});
const refs = [];
const availablePostions = ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"];

function AlertContainer(_ref2) {
  let {
    position,
    reverse,
    stackable,
    duration,
    rendered
  } = _ref2;

  const [toasts, setToasts] = _react.default.useState([]);

  const [removedToasts, setRemovedToasts] = (0, _react.useState)([]);
  const toastPosition = availablePostions.includes(position) ? position : position;

  const addToast = function addToast(type, message) {
    let toastOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      autoClose: true,
      closeDuration: duration
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
      ref: ref,
      children: rendered
    });

    if (!stackable) {
      if (toasts.length < 1) {
        setToasts([...toasts, toast]);
        refs.push(ref);
      }
    } else {
      setToasts([...toasts, toast]);
      refs.push(ref);
    }

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
    setRemovedToasts([...removedToasts, index]); // pag  hindi stackable

    if (!stackable) {
      setToasts([]);
      refs.length = 0;
    }

    if (ref) {
      ref.current.style.display = "none";
    }
  };

  (0, _react.useEffect)(() => {
    Alert.add = addToast;
  }, [toasts, refs]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toastArea".concat(reverse ? " reverse" : "", " area-").concat(toastPosition)
  }, toasts.map((toast, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: index
    }, toast);
  }));
}

const Alert = {
  add: null,
  info: (message, options) => Alert.add("info", message, options),
  success: (message, options) => {
    Alert.add("success", message, options);
  },
  warning: (message, options) => Alert.add("warning", message, options),
  error: (message, options) => Alert.add("error", message, options)
};
exports.Alert = Alert;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Steps;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Steps.propTypes = {
  withNum: _propTypes.PropTypes.bool
};

function Steps(props) {
  const [step, setStep] = (0, _react.useState)(1);
  const [count, setCount] = (0, _react.useState)(0);
  (0, _react.useEffect)(e => {
    var _props$children;

    if ((_props$children = props.children) !== null && _props$children !== void 0 && _props$children.length) {
      setCount(props.children.length);
    }
  }, [props]);
  (0, _react.useEffect)(e => {
    var progress = document.querySelector("#progress");
    progress.style.width = 100 * (step - 1) / (count - 1) + "%";
  }, [step, count]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "progress"
  }), (() => {
    if (count > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => event.props.__TYPE === "StepsList").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement("span", {
          id: step - 1 === key ? "stepsPulse" : "",
          className: step > key ? "step active " : "step"
        }, props.withNum ? key + 1 : filteredComponent.props.icon ? /*#__PURE__*/_react.default.createElement(filteredComponent.props.icon, null) : "");
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children);
    }
  })()), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    id: "prev",
    onClick: e => {
      setStep(step - 1);
    }
  }, "Prev"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    id: "next",
    onClick: e => {
      setStep(step + 1);
    }
  }, "Next")));
}
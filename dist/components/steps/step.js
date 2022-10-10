"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Steps;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

var _stepsList = _interopRequireDefault(require("./stepsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Steps.propTypes = {
  withNum: _propTypes.PropTypes.bool,
  selected: _propTypes.PropTypes.number,
  lineColor: _propTypes.PropTypes.string,
  withAnimation: _propTypes.PropTypes.bool
};
Steps.defaultProps = {
  selected: 1,
  withAnimation: true
};

function Steps(props) {
  var _props$bgColorActive, _props$bgColorActive2, _props$color, _props$borderColorAct;

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
  (0, _react.useEffect)(e => {
    if (props.selected) {
      setStep(props.selected);
    }
  }, [props.selected]);
  return _styleIt.default.it("\n    .nvxStepsInner .steps .step.active {\n      border: 2px solid ".concat((_props$bgColorActive = props === null || props === void 0 ? void 0 : props.bgColorActive) !== null && _props$bgColorActive !== void 0 ? _props$bgColorActive : "#00679d", ";\n      background-color: ").concat((_props$bgColorActive2 = props === null || props === void 0 ? void 0 : props.bgColorActive) !== null && _props$bgColorActive2 !== void 0 ? _props$bgColorActive2 : "#00679d", ";\n      color: ").concat((_props$color = props === null || props === void 0 ? void 0 : props.color) !== null && _props$color !== void 0 ? _props$color : "white", ";\n    }\n    .nvxStepsInner .steps #progress {\n      background-color: ").concat((_props$borderColorAct = props === null || props === void 0 ? void 0 : props.borderColorActive) !== null && _props$borderColorAct !== void 0 ? _props$borderColorAct : "#424242", "\n    }\n    #stepsPulse {\n      animation: pulse ").concat(props !== null && props !== void 0 && props.withAnimation ? "2s" : "0s", " infinite;\n    }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "nvxStepsInner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "progress"
  }), (() => {
    if (count > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => event.props.__TYPE === "StepsList").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement(_stepsList.default, _extends({
          withNum: props === null || props === void 0 ? void 0 : props.withNum,
          num: key + 1,
          id: step - 1 === key ? "stepsPulse" : "",
          className: step > key ? "step active " : "step"
        }, filteredComponent.props));
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children);
    }
  })())));
}
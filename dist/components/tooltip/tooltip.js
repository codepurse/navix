"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tooltip;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _styleIt = _interopRequireDefault(require("style-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TOOLTIP_DIRECTION = ["top", "left", "right", "bottom"];
Tooltip.propTypes = {
  direction: _propTypes.PropTypes.oneOf(TOOLTIP_DIRECTION),
  duration: _propTypes.PropTypes.number,
  delay: _propTypes.PropTypes.number,
  backgroundColor: _propTypes.PropTypes.string,
  arrowColor: _propTypes.PropTypes.string,
  space: _propTypes.PropTypes.number,
  border: _propTypes.PropTypes.string,
  arrow: _propTypes.PropTypes.boolean,
  content: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node]),
  delayHide: _propTypes.PropTypes.number,
  alwaysOpen: _propTypes.PropTypes.bool
};
Tooltip.defaultProps = {
  direction: "right",
  delay: 10,
  arrowColor: "#212121",
  space: 30,
  arrow: true,
  delayHide: 30,
  alwaysOpen: false
};

function Tooltip(props) {
  var _props$backgroundColo;

  let timeout;
  let timeoutHide;
  const [active, setActive] = (0, _react.useState)(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    timeoutHide = setTimeout(() => {
      clearInterval(timeout);
      setActive(false);
      clearInterval(timeoutHide);
    }, props.delayHide);
  };

  const propsStyle = {
    background: (_props$backgroundColo = props === null || props === void 0 ? void 0 : props.backgroundColor) !== null && _props$backgroundColo !== void 0 ? _props$backgroundColo : "#212121",
    marginTop: props.direction === "bottom" ? props.space + "px" : "0px"
  };
  (0, _react.useEffect)(() => {
    if (props.alwaysOpen) {
      setActive(true);
    }
  }, [props.alwaysOpen]);
  return _styleIt.default.it("\n      .Tooltip-Tip.top {\n        top: calc(".concat(props.space, "px * -1);\n      }\n      .Tooltip-Tip.bottom {\n        bottom: calc(").concat(props.space, "px * -1);\n      }\n      .Tooltip-Tip.right {\n        left: calc(100% + ").concat(props.space, "px);\n      }\n      .Tooltip-Tip.left {\n        right: calc(100% + ").concat(props.space, "px);\n      }\n      .Tooltip-Tip.right::before {\n        border-right-color: ").concat(props.arrowColor, ";\n      }\n      .Tooltip-Tip.bottom::before {\n        border-bottom-color: ").concat(props.arrowColor, ";\n      }\n      .Tooltip-Tip.left::before {\n        border-left-color: ").concat(props.arrowColor, ";\n      }\n      .Tooltip-Tip.top::before {\n        border-top-color: ").concat(props.arrowColor, ";\n      }\n      .Tooltip-Tip::before {\n        border: ").concat(!props.arrow ? "none" : "", ";\n      }\n    "), /*#__PURE__*/_react.default.createElement("div", {
    className: "Tooltip-Wrapper",
    onMouseEnter: showTip,
    onMouseLeave: e => {
      if (props.alwaysOpen) {} else {
        hideTip();
      }
    }
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: active ? "nvxfadeIn" : "nvxfadeOut"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Tooltip-Tip ".concat(props.direction, " nvxfadeIn"),
    style: propsStyle
  }, props.content))));
}
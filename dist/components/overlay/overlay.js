"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Overlay;

require("core-js/modules/web.dom-collections.iterator.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OVERLAY_POSITION = ["left", "right", "bottom", "top"];
Overlay.propTypes = {
  position: _propTypes.PropTypes.oneOf(OVERLAY_POSITION),
  center: _propTypes.PropTypes.bool,
  wrapperClassName: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  isOpen: _propTypes.PropTypes.bool,
  onClick: _propTypes.PropTypes.func,
  onMouseOver: _propTypes.PropTypes.func,
  onMouseleave: _propTypes.PropTypes.func,
  isClickOutsie: _propTypes.PropTypes.bool,
  rendered: _propTypes.PropTypes.node,
  style: _propTypes.PropTypes.array
};
Overlay.defaultProps = {
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {}
};

function Overlay(props) {
  const [toggle, setToggle] = (0, _react.useState)(false);

  const overLayCname = value => {
    switch (value) {
      case "left":
        return " nvxOverlayLeft";

      case "right":
        return " nvxOverlayRight";

      case "top":
        return " nvxOverlayTop";
    }
  };

  (0, _react.useEffect)(() => {
    if ((props === null || props === void 0 ? void 0 : props.isOpen) === true || (props === null || props === void 0 ? void 0 : props.isOpen) === false) {
      setToggle(props.isOpen);
    } else {}
  }, [props.isOpen]);
  const overlayClassName = (0, _classnames.default)("", overLayCname(props.position), {
    nvxOverlayCenter: props.center === true && props.position !== "right"
  });
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "nvxOverlay",
    onBlur: e => {
      if ((props === null || props === void 0 ? void 0 : props.isOpen) === true || (props === null || props === void 0 ? void 0 : props.isOpen) === false) {} else {
        setToggle(false);
      }
    },
    onMouseOver: e => {
      props.onMouseOver();
    },
    onMouseLeave: e => {
      props.onMouseLeave();
    },
    onClick: e => {
      if ((props === null || props === void 0 ? void 0 : props.isOpen) === true || (props === null || props === void 0 ? void 0 : props.isOpen) === false) {
        setToggle(props.isOpen);
      } else {
        setToggle(prev => !prev);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children), /*#__PURE__*/_react.default.createElement("div", {
    style: props === null || props === void 0 ? void 0 : props.style,
    onClick: e => {
      e.stopPropagation();
    },
    className: !toggle ? "nvxfadeOut nvxOverlayInner " : "nvxOverlayInner nvxfadeIn " + overlayClassName
  }, props.rendered));
}
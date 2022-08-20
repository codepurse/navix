"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AvatarBatch;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.parse-int.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _avatarContext = require("../../context/avatarContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AVATAR_LAYOUT = ["vertical", "horizontal"];
AvatarBatch.propTypes = {
  layout: _propTypes.PropTypes.oneOf(AVATAR_LAYOUT)
};

function AvatarBatch(props) {
  const [count, setCount] = (0, _react.useState)();
  const [max, setMax] = (0, _react.useState)(0);
  const isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    if (isMounted) {
      setCount(props.children.length);
      console.log(props.children);
      setMax(props.max);
      console.log("Test");
    }

    if (props.max) {
      setMax(props.max);
    } else {
      setMax(100000);
    }

    return () => isMounted.current = false;
  }, [props]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: props.layout === "vertical" ? "block" : "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_avatarContext.AvatarContext.Provider, {
    value: props
  }, (() => {
    if (count > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => {
        var _event$type;

        return (_event$type = event.type) === null || _event$type === void 0 ? void 0 : _event$type.name.includes("Avatar");
      }).map((filteredComponent, key) => key < parseInt(max) && /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, filteredComponent)));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, " ", props.children);
    }
  })(), (() => {
    if (count > parseInt(max)) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "nvxAvatar"
      }, /*#__PURE__*/_react.default.createElement("span", null, "+", count - max));
    }
  })())));
}
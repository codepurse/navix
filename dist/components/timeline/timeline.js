"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Timeline;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.json.stringify.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../box/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Timeline.propTypes = {
  data: _propTypes.PropTypes.array
};
Timeline.defaultProps = {
  data: []
};

function Timeline(props) {
  const [right, setRight] = (0, _react.useState)(true);
  const [left, setLeft] = (0, _react.useState)(true);
  (0, _react.useEffect)(e => {
    try {
      setLeft(JSON.stringify(props.data).includes("leftContent"));
      setRight(JSON.stringify(props.data).includes("rightContent"));
    } catch (error) {}
  }, []);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "nvxTimeline"
  }, props.data.map((data, index, _ref) => {
    let {
      length
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineRow"
    }, left ? /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineColumn"
    }, data.leftContent ? /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineItem nvxTimelineLeft"
    }, data.leftContent) : null) : null, /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineColumn",
      style: {
        maxWidth: "max-content"
      }
    }, index + 1 === length ? null : /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineLine",
      style: data === null || data === void 0 ? void 0 : data._lineStyle
    }), /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineCircle",
      style: data === null || data === void 0 ? void 0 : data._dotStyle
    })), right ? /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineColumn"
    }, data.rightContent ? /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "nvxTimelineItem",
      style: index + 1 === length ? {
        paddingBottom: "0px"
      } : {}
    }, data.rightContent) : null) : null);
  }));
}
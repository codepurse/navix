"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioGroup;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _radioContext = require("../../context/radioContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

RadioGroup.propTypes = {
  onChange: _propTypes.PropTypes.func,
  defaultValue: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string
};
RadioGroup.defaultProps = {
  onChange: () => {},
  className: ""
};

function RadioGroup(props) {
  const [count, setCount] = (0, _react.useState)();
  (0, _react.useEffect)(e => {
    setCount(props.children.length);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(_radioContext.RadioContext.Provider, {
    value: {
      default: props.defaultCheck,
      name: Math.random()
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "nvxRadioGroup " + props.className,
    onChange: e => {
      props.onChange(e.target, e.target.id);
    }
  }, (() => {
    if (count > 0) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => event.props.__TYPE === "Radio").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filteredComponent);
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, props.children);
    }
  })()));
}
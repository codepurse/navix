"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tabs;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _tabsContext = require("../../context/tabsContext");

var _box = _interopRequireDefault(require("../box/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TAB_VARIANT = ["borderline", "rounded"];
const TAB_ALIGN = ["evenly, center, start, end"];
Tabs.propTypes = {
  tabs: _propTypes.PropTypes.array,
  variant: _propTypes.PropTypes.oneOf(TAB_VARIANT),
  onClick: _propTypes.PropTypes.func,
  backDrop: _propTypes.PropTypes.string,
  centered: _propTypes.PropTypes.bool,
  defaultKey: _propTypes.PropTypes.string,
  align: _propTypes.PropTypes.oneOf(TAB_ALIGN),
  onChange: _propTypes.PropTypes.func
};
Tabs.defaultProps = {
  align: "start",
  onChange: () => {},
  onClick: () => {}
};

function Tabs(props) {
  const [activeKey, setActiveKey] = (0, _react.useState)(null);
  const [countHeader, setCountHeader] = (0, _react.useState)();
  const [countContent, setCountContent] = (0, _react.useState)();
  const [variant, setVariant] = (0, _react.useState)("");
  const propStyle = {
    backgroundColor: props.backDrop,
    variant: props.variant
  };
  const style = {
    justifyContent: props.align,
    display: "flex"
  };
  (0, _react.useEffect)(e => {
    var filteredHeader = props.children.filter(function (element) {
      return element.props.__TYPE === "TabHeader";
    }).length;
    var filteredContent = props.children.filter(function (element) {
      return element.props.__TYPE === "TabContent";
    }).length;
    setCountContent(filteredContent);
    setCountHeader(filteredHeader);
    setVariant(props.variant);

    if (props.defaultKey) {
      setActiveKey(props.defaultKey);
    }
  }, [props.children]);
  (0, _react.useEffect)(e => {
    props.onChange(activeKey);
  }, [activeKey]);
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    id: "nvxTsum-tabs"
  }, props), /*#__PURE__*/_react.default.createElement(_box.default, {
    id: "nvxTsum-tabs-main",
    style: style
  }, /*#__PURE__*/_react.default.createElement(_tabsContext.TabContext.Provider, {
    value: {
      propStyle,
      activeKey,
      variant
    }
  }, (() => {
    if (countHeader > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => event.props.__TYPE === "TabHeader").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement("span", {
          onClick: e => {
            if (filteredComponent.props.disable) {
              e.preventDefault();
              return;
            } else {
              try {
                if (!filteredComponent.props.disabled) {
                  filteredComponent.props.onClick();
                }
              } catch (error) {}

              if (!filteredComponent.props.disabled) {
                setActiveKey(filteredComponent.props.id);
              }
            }
          }
        }, filteredComponent);
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, " ", props.children);
    }
  })())), (() => {
    if (countContent > 0) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => event.props.__TYPE === "TabContent").map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        if (activeKey === filteredComponent.props.id) {
          return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            className: "nvxTabContent"
          }, filteredComponent.props.children));
        }
      })())));
    }
  })());
}
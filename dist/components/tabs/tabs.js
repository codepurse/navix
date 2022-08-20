"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tabs;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _tabsContext = require("../../context/tabsContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TAB_VARIANT = ["borderline", "rounded"];
Tabs.propTypes = {
  tabs: _propTypes.PropTypes.array,
  variant: _propTypes.PropTypes.oneOf(TAB_VARIANT),
  onclick: _propTypes.PropTypes.func,
  backDrop: _propTypes.PropTypes.string,
  centered: _propTypes.PropTypes.bool,
  defaultKey: _propTypes.PropTypes.string
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
  const centered = {
    justifyContent: "center",
    display: "flex"
  };
  (0, _react.useEffect)(e => {
    var filteredHeader = props.children.filter(function (element) {
      var _element$type;

      return (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.name.includes("TabHeader");
    }).length;
    var filteredContent = props.children.filter(function (element) {
      var _element$type2;

      return (_element$type2 = element.type) === null || _element$type2 === void 0 ? void 0 : _element$type2.name.includes("TabContent");
    }).length;
    setCountContent(filteredContent);
    setCountHeader(filteredHeader);
    setVariant(props.variant);

    if (props.defaultKey) {
      setActiveKey(props.defaultKey);
    }
  }, [props.children]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "tsum-tabs"
  }, /*#__PURE__*/_react.default.createElement("main", {
    style: props.centered ? centered : null
  }, /*#__PURE__*/_react.default.createElement(_tabsContext.TabContext.Provider, {
    value: {
      propStyle,
      activeKey,
      variant
    }
  }, (() => {
    if (countHeader > 1) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => {
        var _event$type;

        return (_event$type = event.type) === null || _event$type === void 0 ? void 0 : _event$type.name.includes("TabHeader");
      }).map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        return /*#__PURE__*/_react.default.createElement("span", {
          onClick: e => {
            if (filteredComponent.props.disable) {
              e.preventDefault();
              return;
            } else {
              try {
                filteredComponent.props.onClick();
              } catch (error) {}

              setActiveKey(filteredComponent.props.id);
            }
          }
        }, filteredComponent);
      })())));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, " ", props.children);
    }
  })())), /*#__PURE__*/_react.default.createElement("div", null, (() => {
    if (countContent > 0) {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children.filter(event => {
        var _event$type2;

        return (_event$type2 = event.type) === null || _event$type2 === void 0 ? void 0 : _event$type2.name.includes("TabContent");
      }).map((filteredComponent, key) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: key
      }, (() => {
        if (activeKey === filteredComponent.props.id) {
          return /*#__PURE__*/_react.default.createElement("div", null, filteredComponent.props.children);
        }
      })())));
    }
  })()));
}
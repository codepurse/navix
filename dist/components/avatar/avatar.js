"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Avatar;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _avatarContext = require("../../context/avatarContext");

var _avatarStyles = require("./avatarStyles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const AVATAR_SIZE = ["sm", "md", "lg"];
Avatar.propTypes = {
  src: _propTypes.PropTypes.string,
  label: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(AVATAR_SIZE)
};

function Avatar(props) {
  const value = (0, _react.useContext)(_avatarContext.AvatarContext);
  const [valid, setValid] = (0, _react.useState)(false);
  const [bgColor, setBgColor] = (0, _react.useState)(false);
  var colors = ["#FFE0B2", "#FF8A65", "#42A5F5", "#E57373", "#43A047"];

  const propsStyle = _objectSpread({
    backgroundImage: "url(".concat(props.src, ")"),
    backgroundColor: bgColor ? colors[Math.floor(Math.random() * colors.length)] : "",
    marginRight: value.spacing ? value.spacing : ""
  }, (0, _avatarStyles.getSize)(props.size));

  function checkImage(url) {
    var image = new Image();

    image.onload = function () {
      if (this.width > 0) {
        setValid(true);
      }
    };

    image.onerror = function () {
      setValid(false);
    };

    image.src = url;
  }

  (0, _react.useEffect)(e => {
    checkImage(props.src);

    if (value.randomBg) {
      setBgColor(true);
    }
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, (() => {
    if (!valid) {
      if (props.label) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "nvxAvatar",
          style: propsStyle
        }, /*#__PURE__*/_react.default.createElement("span", null, (0, _avatarStyles.getFirstLetters)(props.label)));
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "nvxAvatar",
          style: {
            backgroundImage: "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)"
          }
        });
      }
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "nvxAvatar",
        style: propsStyle
      });
    }
  })());
}
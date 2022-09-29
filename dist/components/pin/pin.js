"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pin;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.parse-float.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PIN_INPUT_TYPE = ["string", "number", "all"];
Pin.propTypes = {
  count: _propTypes.PropTypes.number,
  style: _propTypes.PropTypes.array,
  onClick: _propTypes.PropTypes.func,
  initialValue: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  inputType: _propTypes.PropTypes.oneOf(PIN_INPUT_TYPE),
  hidden: _propTypes.PropTypes.bool,
  wrapperClassName: _propTypes.PropTypes.string,
  inputClassName: _propTypes.PropTypes.string,
  isComplete: _propTypes.PropTypes.func,
  spacing: _propTypes.PropTypes.number,
  wrapperStyle: _propTypes.PropTypes.array,
  inputStyle: _propTypes.PropTypes.array,
  onChange: _propTypes.PropTypes.func,
  onComplete: _propTypes.PropTypes.func,
  animated: _propTypes.PropTypes.bool
};
Pin.defaultProps = {
  count: 4,
  hidden: false,
  spacing: 10,
  onClick: () => {},
  onChange: () => {},
  onComplete: () => {},
  animated: true
};

function Pin(props) {
  const [pinValue, setValue] = (0, _react.useState)([]);

  const numberOnly = event => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const stringOnly = event => {
    if (!/[a-z]$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const inputClassName = (0, _classnames.default)("nvxPinInput", props.inputClassName, {
    nvxPinInputAnimate: props.animated === true
  });

  Array.prototype.remove = function (index) {
    this.splice(index, 1);
  };

  const _onChange = (0, _react.useCallback)(e => {
    const {
      target: {
        value,
        name
      }
    } = e;
    const item = {
      id: parseInt(name),
      value: parseInt(value)
    };
    var array = pinValue;
    const i = array.findIndex(_item => _item.id === parseInt(name));

    if (i > -1) {
      array[i] = item;

      if (!value) {
        array.remove(name);
        setValue(pinValue.splice(name, 1));
        return false;
      }
    } else {
      setValue([...pinValue, item]);
      return false;
    }

    setValue(array);
  }, [pinValue]);

  (0, _react.useEffect)(e => {
    props.onChange(pinValue.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)));
    if (pinValue.length === props.count) props.onComplete(true);
  }, [pinValue]);

  const wrapperStyle = _objectSpread({
    gap: props.spacing ? props.spacing + "px" : null
  }, props.wrapperStyle);

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "nvxPinWrapper " + props.wrapperClassName,
    style: wrapperStyle
  }, Array.from({
    length: props.count
  }, (_, i) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: i
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: props.hidden ? "password" : "text",
    className: inputClassName,
    style: props.inputStyle,
    name: i,
    onKeyPress: event => {
      if (props.inputType === "number") return numberOnly(event);
      if (props.inputType === "string") return stringOnly(event);
      return false;
    },
    onFocus: e => {
      e.currentTarget.select();
    },
    onClick: e => {
      props.onClick(pinValue.find(x => x.id === i));
    },
    onChange: e => {
      _onChange(e, i);

      try {
        e.currentTarget.nextSibling.focus();
      } catch (error) {}
    },
    maxLength: 1
  }))));
}
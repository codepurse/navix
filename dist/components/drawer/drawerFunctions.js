"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawerSize = exports.drawerPosition = exports.drawerClass = void 0;

const drawerSize = size => {
  var options = {
    xs: "var(--drawer-size-xs)",
    sm: "var(--drawer-size-sm)",
    md: "var(--drawer-size-md)",
    lg: "var(--drawer-size-lg)",
    xl: "var(--drawer-size-xl)",
    default: size
  };
  return options[size] || options["default"];
};

exports.drawerSize = drawerSize;

const drawerClass = size => {
  var options = {
    left: "nvxDrawerLeft",
    right: "nvxDrawerRight",
    bottom: "nvxDrawerBottom",
    top: "nvxDrawerTop"
  };
  return options[size] || options["left"];
};

exports.drawerClass = drawerClass;

const drawerPosition = (value, size) => {
  var options = {
    top: {
      height: size
    },
    bottom: {
      height: size
    },
    right: {
      width: size
    },
    left: {
      width: size
    }
  };
  return options[value] || options["top"];
};

exports.drawerPosition = drawerPosition;
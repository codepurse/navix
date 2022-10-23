"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positionType = exports.fontSize = exports.badgeType = void 0;

const fontSize = size => {
  var options = {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)"
  };
  return options[size] || options[null];
};

exports.fontSize = fontSize;

const badgeType = value => {
  var options = {
    info: "nvxBadgeInfo",
    danger: "nvxBadgeDanger",
    warning: "nvxBadgeWarning",
    sucess: "nvxBadgeSucess"
  };
  return options[value] || options["nvxBadgeNeutral"];
};

exports.badgeType = badgeType;

const positionType = value => {
  var options = {
    "top-right": {
      position: "absolute",
      top: "0",
      left: "100%",
      transform: "translate(-50%,-50%)"
    },
    "bottom-right": {
      position: "absolute",
      top: "100%",
      left: "100%",
      transform: "translate(-50%,-50%)"
    },
    "top-left": {
      position: "absolute",
      top: "0",
      left: "0",
      transform: "translate(-50%,-50%)"
    },
    "bottom-left": {
      position: "absolute",
      top: "100%",
      left: "0",
      transform: "translate(-50%,-50%)"
    }
  };
  return options[value] || options[null];
};

exports.positionType = positionType;
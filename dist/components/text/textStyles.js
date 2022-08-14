"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textSize = exports.borderType = exports.textType = void 0;

const textType = value => {
  switch (value) {
    case "primary":
      return "#f7f8fa";

    case "danger":
      return "#fef1f2";

    case "warning":
      return "#ffbf00";

    case "sucess":
      return "#59ba69";

    default:
      return "#f7f8fa";
  }
};

exports.textType = textType;

const borderType = value => {
  switch (value) {
    case "primary":
      return "#f7f8fa";

    case "danger":
      return "#f55f5f";

    case "sucess":
      return "#59ba69";

    default:
      return "#eeeeee";
  }
};

exports.borderType = borderType;

const textSize = value => {
  switch (value) {
    case "lg":
      return "18px";

    case "md":
      return "15px";

    case "sm":
      return "13px";

    default:
      return "15px";
  }
};

exports.textSize = textSize;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonType = exports.buttonSize = void 0;

const buttonType = value => {
  switch (value) {
    case "primary":
      return "#003A61";

    case "danger":
      return "#ff5f5f";

    case "warning":
      return "#ffbf00";

    case "sucess":
      return "#59ba69";

    default:
      return "#a7a9ac";
  }
};

exports.buttonType = buttonType;

const buttonSize = value => {
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

exports.buttonSize = buttonSize;
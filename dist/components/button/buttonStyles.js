"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonType = exports.buttonSize = exports.buttonCname = void 0;

const buttonType = (value, type) => {
  switch (value) {
    case "outline":
      if (type === "primary") return "btnNvxPrimOut";

    case "none":
      if (type === "primary") return "btnNvxPrimNone";
      if (type === "cancel") return "btnNvxCancelNone";

    case "warning":
      return "#ffbf00";

    case "sucess":
      return "#59ba69";

    default:
      return "#fff";
  }
};

exports.buttonType = buttonType;

const buttonCname = value => {
  switch (value) {
    case "primary":
      return "btnNvxPrimary";

    case "cancel":
      return "btnNvxCancel";

    case "warning":
      return "#ffbf00";

    case "sucess":
      return "#59ba69";

    default:
      return "#fff";
  }
};

exports.buttonCname = buttonCname;

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
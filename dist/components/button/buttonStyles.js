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
    case "xxxl":
      return "var(--font-size-xxxl)";

    case "xxl":
      return "var(--font-size-xxl)";

    case "xl":
      return "var(--font-size-xl)";

    case "lg":
      return "var(--font-size-lg)";

    case "md":
      return "var(--font-size-md)";

    case "sm":
      return "var(--font-size-sm)";

    case "xs":
      return "var(--font-size-xs)";

    default:
      return "var(--font-size-md)";
  }
};

exports.buttonSize = buttonSize;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textType = void 0;

const textType = value => {
  switch (value) {
    case 1:
      return "nvxH1";

    case 2:
      return "nvxH2";

    case 3:
      return "nvxH3";

    case 4:
      return "nvxH4";

    default:
      return "nvxDefault";
  }
};

exports.textType = textType;
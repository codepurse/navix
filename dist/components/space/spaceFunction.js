"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaceAlign = void 0;

const spaceAlign = value => {
  switch (value) {
    case "end":
      return "flex-end";

    case "start":
      return "flex-start";

    case "center":
      return "center";

    case "between":
      return "center";

    case "evenly":
      return "space-between";

    default:
      return "flex-start";
  }
};

exports.spaceAlign = spaceAlign;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badgeType = void 0;

const badgeType = value => {
  switch (value) {
    case "primary":
      return {
        color: "#2a6b89",
        backgroundColor: "#f2f6f8",
        borderColor: "#2a6b89"
      };

    case "danger":
      return {
        color: "#e63b3b",
        backgroundColor: "#ffe7e7",
        borderColor: "#f5f5f5"
      };

    case "warning":
      return {
        color: "#ffcc33",
        backgroundColor: "#fff1c8",
        borderColor: "#ffcc33"
      };

    case "sucess":
      return {
        color: "#3fbf62",
        backgroundColor: "#ebf7ee",
        borderColor: "#3fbf62"
      };

    default:
      return {
        color: "#2a6b89",
        backgroundColor: "#f2f6f8",
        borderColor: "#2a6b89"
      };
  }
};

exports.badgeType = badgeType;
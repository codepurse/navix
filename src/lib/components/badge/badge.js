import classNames from "classnames";
import { PropTypes } from "prop-types";
import React from "react";
import Box from "../box/box";
import { badgeType } from "./badgeFunction";

const BADGE_TYPE = ["success", "danger", "warning", "info", "neutral"];
const BADGE_POSITION = ["top-right", "top-left", "bottom-right", "bottom-left"];
Badge.propTypes = {
  type: PropTypes.oneOf(BADGE_TYPE),
  position: PropTypes.oneOf(BADGE_POSITION),
};

const positionType = (value) => {
  switch (value) {
    case "top-right":
      return {
        position: "absolute",
        top: "0",
        left: "100%",
        transform: "translate(-50%,-50%)",
      };
    case "bottom-right":
      return {
        position: "absolute",
        top: "100%",
        left: "100%",
        transform: "translate(-50%,-50%)",
      };
    case "top-left":
      return {
        position: "absolute",
        top: "0",
        left: "0",
        transform: "translate(-50%,-50%)",
      };
    case "bottom-left":
      return {
        position: "absolute",
        top: "100%",
        left: "0",
        transform: "translate(-50%,-50%)",
      };
    default:
      return;
  }
};
export default function Badge(props) {
  const badgeClassName = classNames(
    "nvxBadge",
    props.className,
    badgeType(props.type)
  );
  return (
    <Box
      className={badgeClassName}
      style={(props.style, positionType(props.position))}
    >
      {props.children}
    </Box>
  );
}

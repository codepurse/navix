import classNames from "classnames";
import { PropTypes } from "prop-types";
import React from "react";
import Box from "../box/box";
import { badgeType, fontSize, positionType } from "./badgeFunction";

const BADGE_TYPE = ["success", "danger", "warning", "info", "neutral"];
const BADGE_POSITION = ["top-right", "top-left", "bottom-right", "bottom-left"];
const BADGE_SIZE = ["xs", "sm", "md", "lg"];
Badge.propTypes = {
  type: PropTypes.oneOf(BADGE_TYPE),
  position: PropTypes.oneOf(BADGE_POSITION),
  size: PropTypes.oneOf(BADGE_SIZE),
};

export default function Badge(props) {
  const badgeClassName = classNames(
    "nvxBadge",
    props.className,
    badgeType(props.type)
  );

  const propStyle = {
    fontSize: fontSize(props.size),
    ...props.style,
    ...positionType(props.position),
  };

  console.log(fontSize(props.size));
  return (
    <Box className={badgeClassName} style={propStyle} {...props}>
      {props.children}
    </Box>
  );
}

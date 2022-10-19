import classNames from "classnames";
import { PropTypes } from "prop-types";
import React from "react";
import Box from "../box/box";
import { badgeType } from "./badgeFunction";
const BADGE_TYPE = ["success", "danger", "warning", "info", "neutral"];

Badge.propTypes = {
  type: PropTypes.oneOf(BADGE_TYPE),
};

export default function Badge(props) {
  const badgeClassName = classNames(
    "nvxBadge",
    props.className,
    badgeType(props.type)
  );
  return (
    <Box className={badgeClassName} style={props.style}>
      {props.children}
    </Box>
  );
}

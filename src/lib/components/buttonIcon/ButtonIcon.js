import { PropTypes } from "prop-types";
import React from "react";
import { buttonSize, buttonType } from "./ButtonIconStyle";

const BUTTON_ICON_SIZE = ["lg", "md", "sm"];

ButtonIcon.propTypes = {
  iconRendered: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_ICON_SIZE),
};

export default function ButtonIcon(props) {
  const propsStyle = {
    borderRadius: props.rounded ? "5000px" : "",
    fontSize: props.fontSize ? props.fontSize : buttonSize(props.size),
    ...props.style,
  };
  return (
    <button
      style={propsStyle}
      className={
        props.variant === "delete"
          ? "nvxBtnIcon nvxBtnIconDelete"
          : "nvxBtnIcon"
      }
    >
      <i>
        {props.iconRendered ? props.iconRendered : buttonType(props.variant)}
      </i>
    </button>
  );
}

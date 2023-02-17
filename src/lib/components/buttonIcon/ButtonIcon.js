import { PropTypes } from "prop-types";
import React from "react";
import { buttonSize, buttonType } from "./ButtonIconStyle";

const BUTTON_ICON_SIZE = ["lg", "md", "sm"];

ButtonIcon.propTypes = {
  iconRendered: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_ICON_SIZE),
  style: PropTypes.array,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};

ButtonIcon.defaultProps = {
  disabled: false,
  onClick: () => {},
  onMouseOver: () => {},
  onMouseUp: () => {},
  onMouseDown: () => {},
};

export default function ButtonIcon(props) {
  const propsStyle = {
    borderRadius: props.rounded ? "5000px" : "",
    fontSize: props.fontSize ? props.fontSize : buttonSize(props.size),
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : "1",
    color: props.color ? props.color : "black",
    ...props.style,
  };
  return (
    <button
      style={propsStyle}
      onClick={(e) => {
        if (!props.disabled) {
          props.onClick(e);
        }
      }}
      onMouseOver={(e) => {
        if (!props.disabled) {
          props.onMouseOver();
        }
      }}
      onMouseDown={(e) => {
        props.onMouseDown();
      }}
      onMouseUp={(e) => {
        props.onMouseUp();
      }}
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

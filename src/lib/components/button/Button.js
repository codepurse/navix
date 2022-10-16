import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { Fragment, useContext } from "react";
import { NavixSource } from "../../context/navixProvider";
import { buttonCname, buttonSize, buttonType } from "../button/buttonStyles";
const BUTTON_SIZES = ["xxxl", "xxl", "xl", "lg", "sm", "md", "xs"];

const BUTTON_TYPES = ["default", "primary", "success", "warning", "danger"];

const BUTTON_ALIGN_TEST = ["left", "center", "right"];

const BUTTON_TARGET = ["_self", "_blank", "_parent", "_top", "string"];

const BUTTON_CATEGORY = ["outline", "none", "default"];

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(BUTTON_SIZES),
  type: PropTypes.oneOf(BUTTON_TYPES),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onclick: PropTypes.func,
  variant: PropTypes.oneOf(BUTTON_CATEGORY),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  fill: PropTypes.bool,
  alignText: PropTypes.oneOf(BUTTON_ALIGN_TEST),
  href: PropTypes.bool,
  target: PropTypes.oneOf(BUTTON_TARGET),
  isLoading: PropTypes.bool,
  circular: PropTypes.bool,
};

export default function Button(props) {
  const value = useContext(NavixSource);
  const buttonClassName = classNames(
    "btnNvxDefault",
    props.className,
    {
      "btn--loading btnLoad": props.isLoading === true,
    },
    buttonCname(props.type),
    buttonType(props.category, props.type)
  );

  const propsStyle = {
    textAlign: props.alignText ? props.alignText : "center",
    width: props.fill && "100%",
    opacity: props.disabled ? "0.5" : "",
    fontSize: buttonSize(props.size),
    borderRadius: props.circular ? "500px" : null,
  };

  const customStyle = { ...propsStyle, ...props.css?.button, ...props.style };
  return (
    <button
      style={customStyle}
      className={buttonClassName}
      onClick={(e) => {
        if (props.disabled || props.isLoading) {
          e.preventDefault();
          return;
        } else {
          try {
            props.onClick();
          } catch (error) {}
        }
      }}
    >
      {props.isLoading ? (
        <span className="spanLoad">
          <b style={props.css?.button.dots}></b>
          <b></b>
          <b></b>
        </span>
      ) : (
        <Fragment>
          <i className={"iNvxIconLeft"}>{props.iconLeft}</i>
          {props.children}
          <i className={"iNvxIconRight"}>{props.iconRight}</i>
        </Fragment>
      )}
    </button>
  );
}

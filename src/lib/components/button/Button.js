import classNames from "classnames";
import { PropTypes } from "prop-types";
import { Fragment } from "react";
import styles from "../button/button.module.scss";
import { buttonSize, buttonType } from "../button/buttonStyles";
const BUTTON_SIZES = ["lg", "sm", "md"];

const BUTTON_TYPES = ["default", "primary", "success", "warning", "danger"];

const BUTTON_ALIGN_TEST = ["left", "center", "right"];

const BUTTON_TARGET = ["_self", "_blank", "_parent", "_top", "string"];

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(BUTTON_SIZES),
  type: PropTypes.oneOf(BUTTON_TYPES),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onclick: PropTypes.func,
  outline: PropTypes.bool,
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
  const buttonClassName = classNames(styles.btnNvxDefault, props.className, {
    "btn--loading btnLoad": props.isLoading === true,
  });

  const propsStyle = {
    backgroundColor: buttonType(props.type),
    textAlign: props.alignText ? props.alignText : "center",
    width: props.fill && "100%",
    fontSize: buttonSize(props.size),
    borderRadius: props.circular ? "500px" : null,
  };

  const customStyle = { ...propsStyle, ...props.css?.button };
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
          <b style={props.css.button.dots}></b>
          <b></b>
          <b></b>
        </span>
      ) : (
        <Fragment>
          <i className={styles.iNvxIconLeft}>{props.iconLeft}</i>
          {props.children}
          <i className={styles.iNvxIconRight}>{props.iconRight}</i>
        </Fragment>
      )}
    </button>
  );
}

import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";

const OVERLAY_POSITION = ["left", "right", "bottom", "top"];

Overlay.propTypes = {
  position: PropTypes.oneOf(OVERLAY_POSITION),
  center: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseleave: PropTypes.func,
  isClickOutsie: PropTypes.bool,
  rendered: PropTypes.node,
  style: PropTypes.array,
};

Overlay.defaultProps = {
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
};

export default function Overlay(props) {
  const [toggle, setToggle] = useState(false);

  const overLayCname = (value) => {
    switch (value) {
      case "left":
        return " nvxOverlayLeft";
      case "right":
        return " nvxOverlayRight";
      case "top":
        return " nvxOverlayTop";
    }
  };

  useEffect(() => {
    if (props?.isOpen === true || props?.isOpen === false) {
      setToggle(props.isOpen);
    } else {
    }
  }, [props.isOpen]);

  const overlayClassName = classNames("", overLayCname(props.position), {
    nvxOverlayCenter: props.center === true && props.position !== "right",
  });

  return (
    <section
      className="nvxOverlay"
      onBlur={(e) => {
        if (props?.isOpen === true || props?.isOpen === false) {
        } else {
          setToggle(false);
        }
      }}
      onMouseOver={(e) => {
        props.onMouseOver();
      }}
      onMouseLeave={(e) => {
        props.onMouseLeave();
      }}
      onClick={(e) => {
        if (props?.isOpen === true || props?.isOpen === false) {
          setToggle(props.isOpen);
        } else {
          setToggle((prev) => !prev);
        }
      }}
    >
      <Fragment>{props.children}</Fragment>
      <div
        style={props?.style}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          !toggle
            ? "nvxfadeOut nvxOverlayInner "
            : "nvxOverlayInner nvxfadeIn " + overlayClassName
        }
      >
        {props.rendered}
      </div>
    </section>
  );
}

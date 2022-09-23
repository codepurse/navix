import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { Fragment, useState } from "react";

const OVERLAY_POSITION = ["left", "right", "bottom", "top"];

Overlay.propTypes = {
  position: PropTypes.oneOf(OVERLAY_POSITION),
  center: PropTypes.bool,
};
export default function Overlay(props) {
  const [toggle, setToggle] = useState(true);

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

  const overlayClassName = classNames("", overLayCname(props.position), {
    nvxOverlayCenter: props.center === true && props.position !== "right",
  });

  return (
    <section
      className="nvxOverlay"
      onBlur={(e) => {
        if (props.show === undefined) {
          setToggle(false);
          console.log(props.show);
        }
      }}
      onClick={(e) => {
        setToggle((prev) => !prev);
      }}
    >
      <Fragment>{props.children}</Fragment>
      <div
        className={
          !toggle
            ? "nvxfadeOut nvxOverlayInner "
            : "nvxOverlayInner nvxfadeIn" + overlayClassName
        }
      >
        {props.rendered}
      </div>
    </section>
  );
}

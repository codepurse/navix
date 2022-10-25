import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { Fragment } from "react";
import Box from "../box/box";
import { drawerClass, drawerPosition, drawerSize } from "./drawerFunctions";

const DRAWER_SIZES = ["xl", "lg", "sm", "md", "xs"];
Drawer.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.oneOf(DRAWER_SIZES),
  className: PropTypes.string,
  id: PropTypes.string,
  enableOverlay: PropTypes.bool,
  overlayOpacity: PropTypes.number,
  overlayColor: PropTypes.string,
  overlayBlur: PropTypes.number,
  animnationSpeed: PropTypes.string,
  onClose: PropTypes.func,
};

Drawer.defaultProps = {
  show: false,
  size: "md",
  enableOverlay: true,
  overlayColor: "73, 67, 67",
  overlayOpacity: "0.25",
  overlayBlur: "2.5px",
  animationSpeed: "var(--animation-faster)",
  onClose: () => {},
};
export default function Drawer(props) {
  const style = {
    ...drawerPosition(props.position, drawerSize(props.size)),
    transition: `all ${props.animationSpeed}`,
    ...props.style,
  };

  const drawerClassName = classNames(
    "nvxDrawerWrapper",
    props.className,
    drawerClass(props.position)
  );

  const styleOverlay = {
    display: props.show ? "block" : "none",
    background: `rgba(${props.overlayColor}, ${props.overlayOpacity})`,
    backdropFilter: `blur(${props.overlayBlur + "px"})`,
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      props.onClose();
    }
  };

  return (
    <Fragment>
      {props.enableOverlay ? (
        <Box
          className="nvxDrawerOverlay"
          style={styleOverlay}
          onClick={(e) => {
            props.onClose();
          }}
        ></Box>
      ) : null}
      <Box
        className={drawerClassName}
        style={props.show ? style : ""}
        onClick={(e) => {
          console.log(e);
        }}
      >
        {props.children}
      </Box>
    </Fragment>
  );
}

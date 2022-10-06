import { PropTypes } from "prop-types";
import React, { useState } from "react";
import Style from "style-it";

const TOOLTIP_DIRECTION = ["top", "left", "right", "bottom"];

Tooltip.propTypes = {
  direction: PropTypes.oneOf(TOOLTIP_DIRECTION),
  duration: PropTypes.number,
  delay: PropTypes.number,
  backgroundColor: PropTypes.string,
  arrowColor: PropTypes.string,
  space: PropTypes.number,
  border: PropTypes.string,
  arrow: PropTypes.boolean,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delayHide: PropTypes.number,
};

Tooltip.defaultProps = {
  direction: "right",
  delay: 10,
  arrowColor: "#212121",
  space: 30,
  arrow: true,
  delayHide: 30,
};
export default function Tooltip(props) {
  let timeout;
  let timeoutHide;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    timeoutHide = setTimeout(() => {
      clearInterval(timeout);
      setActive(false);
      clearInterval(timeoutHide);
    }, props.delayHide);
  };

  const propsStyle = {
    background: props?.backgroundColor ?? "#212121",
    marginTop: props.direction === "bottom" ? props.space + "px" : "0px",
  };

  return Style.it(
    `
      .Tooltip-Tip.top {
        top: calc(${props.space}px * -1);
      }
      .Tooltip-Tip.bottom {
        bottom: calc(${props.space}px * -1);
      }
      .Tooltip-Tip.right {
        left: calc(100% + ${props.space}px);
      }
      .Tooltip-Tip.left {
        right: calc(100% + ${props.space}px);
      }
      .Tooltip-Tip.right::before {
        border-right-color: ${props.arrowColor};
      }
      .Tooltip-Tip.bottom::before {
        border-bottom-color: ${props.arrowColor};
      }
      .Tooltip-Tip.left::before {
        border-left-color: ${props.arrowColor};
      }
      .Tooltip-Tip.top::before {
        border-top-color: ${props.arrowColor};
      }
      .Tooltip-Tip::before {
        border: ${!props.arrow ? "none" : ""};
      }
    `,
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      <div className={active ? "nvxfadeIn" : "nvxfadeOut"}>
        <div
          className={`Tooltip-Tip ${props.direction} nvxfadeIn`}
          style={propsStyle}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}

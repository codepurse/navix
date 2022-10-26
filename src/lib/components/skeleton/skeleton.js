import { PropTypes } from "prop-types";
import Box from "../box/box";

Skeleton.propTypes = {
  show: PropTypes.bool,
  startColor: PropTypes.string,
  middleColor: PropTypes.string,
  endColor: PropTypes.string,
  animationSpeed: PropTypes.string,
  enableAnimation: PropTypes.bool,
};

Skeleton.defaultProps = {
  show: true,
  startColor: "#eee",
  middleColor: "#ddd",
  endColor: "#eee",
  animationSpeed: "5s",
  enableAnimation: true,
};

export default function Skeleton(props) {
  const propsStyle = {
    background: !props.show
      ? "transparent"
      : `linear-gradient(to right, ${props.startColor} 20%, ${props.middleColor} 50%, ${props.endColor} 80%)`,
    animationDuration: `${props.enableAnimation ? props.animationSpeed : "0s"}`,
  };

  return (
    <Box className="nvxSkeleton" {...props} style={propsStyle}>
      <Box visibility={props.show ? "hidden" : ""}>{props.children}</Box>
    </Box>
  );
}

import { PropTypes } from "prop-types";

const DIVIDER_SIZES = ["xl", "lg", "sm", "md", "xs"];
const DIVIDER_TYPE = ["solid", "dashed", "dotted"];
const DIVIDER_ORIENTATION = ["vertical", "horizontal"];
Divider.propTypes = {
  type: PropTypes.oneOf(DIVIDER_TYPE),
  size: PropTypes.oneOf(DIVIDER_SIZES),
  orientation: PropTypes.oneOf(DIVIDER_ORIENTATION),
  color: PropTypes.string,
};

Divider.defaultProps = {
  type: "solid",
  size: "xs",
  orientation: "horizontal",
  color: "var(--dark-100)",
};

export default function Divider(props) {
  const propStyle = {
    width: `${props.orientation === "horizontal" ? "100%" : "0px"}`,
    height: `${props.orientation === "vertical" ? "100%" : "0px"}`,
    borderColor: `${props.color}`,
    borderStyle: `${props.type}`,
    borderWidth: `${
      props.orientation === "horizontal" ? "0px 0px 1px" : "0px 0px 0px 1px"
    }`,
  };
  return <hr className="nvxDivider" style={propStyle}></hr>;
}

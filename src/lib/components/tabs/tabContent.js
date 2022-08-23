import { PropTypes } from "prop-types";
import React from "react";

const TabContent = (props) => {
  return <div className="nvxTabContent">{props.children}</div>;
};

TabContent.propTypes = {
  _TYPE: PropTypes.string,
};

TabContent.defaultProps = {
  __TYPE: "TabContent",
};

export default TabContent;

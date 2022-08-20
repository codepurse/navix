import { PropTypes } from "prop-types";
import React, { Fragment } from "react";

const LIST_TYPE = ["ol", "ul"];

List.protoTypes = {
  type: PropTypes.oneOf(LIST_TYPE),
};

export default function List(props) {
  return (
    <Fragment>
      <div className="nvxList">
        {props.type === "ol" ? (
          <ol>{props.children}</ol>
        ) : (
          <ul>{props.children}</ul>
        )}
      </div>
    </Fragment>
  );
}

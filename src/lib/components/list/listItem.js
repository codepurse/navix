import React from "react";

export default function ListItem(props) {
  return (
    <li>
      <div className="nvxListItem">
        <div style={{ maxWidth: "80px" }}>
          <label className="nvxIconList">
            {props.renderIcon ? props.renderIcon : <span>&#9864;</span>}
          </label>
        </div>
        <div className="nvxListInner">
          <p className="nvxListHeader">{props.label}</p>
          {props.subLabel ? (
            <p className="nvxListHeaderSub">{props.subLabel}</p>
          ) : (
            ""
          )}
          {props.children}
        </div>
      </div>
    </li>
  );
}

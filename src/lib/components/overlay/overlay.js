import React from "react";

export default function Overlay(props) {
  return (
    <section className="nvxOverlay bottom">
      {props.children}
      <div
        className={
          !props.show
            ? "nvxfadeOut nvxOverlayInner "
            : "nvxOverlayInner nvxfadeIn"
        }
      >
        {props.rendered}
      </div>
    </section>
  );
}

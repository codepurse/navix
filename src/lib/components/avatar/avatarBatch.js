import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AvatarContext } from "../../context/avatarContext";

const AVATAR_LAYOUT = ["vertical", "horizontal"];

AvatarBatch.propTypes = {
  layout: PropTypes.oneOf(AVATAR_LAYOUT),
};

export default function AvatarBatch(props) {
  const [count, setCount] = useState();
  const [max, setMax] = useState(0);
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted) {
      setCount(props.children.length);
      setMax(props.max);
    }
    if (props.max) {
      setMax(props.max);
    } else {
      setMax(100000);
    }
    return () => (isMounted.current = false);
  }, [props]);

  return (
    <div style={{ display: props.layout === "vertical" ? "block" : "flex" }}>
      <Fragment>
        <AvatarContext.Provider value={props}>
          {(() => {
            if (count > 1) {
              return (
                <Fragment>
                  {props.children
                    .filter((event) => event.props.__TYPE === "Avatar")
                    .map(
                      (filteredComponent, key) =>
                        key < parseInt(max) && (
                          <Fragment key={key}>{filteredComponent}</Fragment>
                        )
                    )}
                </Fragment>
              );
            } else {
              return <Fragment> {props.children}</Fragment>;
            }
          })()}
          {(() => {
            if (count > parseInt(max)) {
              return (
                <div className="nvxAvatar">
                  <span>+{count - max}</span>
                </div>
              );
            }
          })()}
        </AvatarContext.Provider>
      </Fragment>
    </div>
  );
}

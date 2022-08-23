import { PropTypes } from "prop-types";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AvatarContext } from "../../context/avatarContext";
import { getFirstLetters, getSize } from "./avatarStyles";

const AVATAR_SIZE = ["sm", "md", "lg"];

Avatar.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SIZE),
  __TYPE: PropTypes.string,
};

Avatar.defaultProps = {
  __TYPE: "Avatar",
};

export default function Avatar(props) {
  const value = useContext(AvatarContext);
  const [valid, setValid] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  var colors = ["#FFE0B2", "#FF8A65", "#42A5F5", "#E57373", "#43A047"];

  const propsStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundColor: bgColor
      ? colors[Math.floor(Math.random() * colors.length)]
      : "",
    marginRight: value.spacing ? value.spacing : "",
    ...getSize(props.size),
  };

  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setValid(true);
      }
    };
    image.onerror = function () {
      setValid(false);
    };
    image.src = url;
  }

  useEffect(
    (e) => {
      checkImage(props.src);
      if (value.randomBg) {
        setBgColor(true);
      }
    },
    [props]
  );

  return (
    <Fragment>
      {(() => {
        if (!valid) {
          if (props.label) {
            return (
              <div className="nvxAvatar" style={propsStyle}>
                <span>{getFirstLetters(props.label)}</span>
              </div>
            );
          } else {
            return (
              <div
                className="nvxAvatar"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)",
                }}
              ></div>
            );
          }
        } else {
          return <div className="nvxAvatar" style={propsStyle}></div>;
        }
      })()}
    </Fragment>
  );
}

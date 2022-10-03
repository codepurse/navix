import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import Style from "style-it";

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  checkedBgColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  labelBottom: PropTypes.string,
  labelTop: PropTypes.string,
};

Switch.defaultProps = {
  disabled: false,
  onClick: () => {},
  onChange: () => {},
};

export default function Switch(props) {
  const [check, setCheck] = useState(false);
  const propsStyle = {
    cursor: props.disabled ? "not-allowed" : "",
    opacity: props.disabled ? "0.5" : "",
    backgroundColor: props.backgroundColor ? props.backgroundColor : null,
  };

  const propsCheckStyle = {
    backgroundColor: props.checkedBgColor ? props.checkedBgColor : null,
  };

  useEffect(
    (e) => {
      if (props?.checked === true || props?.checked === false) {
        setCheck(props.checked);
      } else {
      }
    },
    [props.checked]
  );

  useEffect(
    (e) => {
      props.onChange(check);
    },
    [check]
  );

  return Style.it(
    `
    input:checked + .slider:before {
      transform: translateX(27px);
      background: ${check ? props?.checkedCaretColor : ""};
    }
    `,
    <div className="nvxWrapperParentChk">
      {props?.topLabel ? <label className="nvxCheckTop">test</label> : null}
      <div className="vertical-center nvxWrapperInnerChk">
        {props?.leftLabel ? (
          <span className="nvxCheckLeft">{props?.leftLabel}</span>
        ) : null}
        <label className="switch">
          <input
            type="checkbox"
            checked={check}
            disabled={props.disabled}
            onClick={(e) => {
              props?.onClick();
            }}
            onChange={(e) => {
              props?.onChange(e.currentTarget.checked);
              if (props?.checked === true || props?.checked === false) {
              } else {
                setCheck(e.currentTarget.checked);
              }
            }}
          />
          <span
            className="slider"
            style={{ ...propsStyle, ...(check ? propsCheckStyle : "") }}
          ></span>
        </label>
        {props?.rightLabel ? (
          <span className="nvxCheckRight">{props?.rightLabel}</span>
        ) : null}
      </div>
      {props?.bottomLabel ? (
        <label className="nvxCheckBottom">test</label>
      ) : null}
    </div>
  );
}

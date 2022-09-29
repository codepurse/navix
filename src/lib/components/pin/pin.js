import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { Fragment, useCallback, useEffect, useState } from "react";

const PIN_INPUT_TYPE = ["string", "number", "all"];

Pin.propTypes = {
  count: PropTypes.number,
  style: PropTypes.array,
  onClick: PropTypes.func,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputType: PropTypes.oneOf(PIN_INPUT_TYPE),
  hidden: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  isComplete: PropTypes.func,
  spacing: PropTypes.number,
  wrapperStyle: PropTypes.array,
  inputStyle: PropTypes.array,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  animated: PropTypes.bool,
};

Pin.defaultProps = {
  count: 4,
  hidden: false,
  spacing: 10,
  onClick: () => {},
  onChange: () => {},
  onComplete: () => {},
  animated: true,
};

export default function Pin(props) {
  const [pinValue, setValue] = useState([]);
  const numberOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const stringOnly = (event) => {
    if (!/[a-z]$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const inputClassName = classNames("nvxPinInput", props.inputClassName, {
    nvxPinInputAnimate: props.animated === true,
  });

  Array.prototype.remove = function (index) {
    this.splice(index, 1);
  };

  const onChange = useCallback(
    (e) => {
      const {
        target: { value, name },
      } = e;
      const item = { id: parseInt(name), value: parseInt(value) };
      var array = pinValue;
      const i = array.findIndex((_item) => _item.id === parseInt(name));
      if (i > -1) {
        array[i] = item;
        if (!value) {
          array.remove(name);
          setValue(pinValue.splice(name, 1));
          return false;
        }
      } else {
        setValue([...pinValue, item]);
        return false;
      }
      setValue(array);
    },
    [pinValue]
  );

  useEffect(
    (e) => {
      props.onChange(
        pinValue.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
      );
      if (pinValue.length === props.count) props.onComplete(true);
    },
    [pinValue]
  );

  const wrapperStyle = {
    gap: props.spacing ? props.spacing + "px" : null,
    ...props.wrapperStyle,
  };

  return (
    <form
      className={"nvxPinWrapper " + props.wrapperClassName}
      style={wrapperStyle}
    >
      {Array.from({ length: props.count }, (_, i) => (
        <Fragment key={i}>
          <input
            type={props.hidden ? "password" : "text"}
            className={inputClassName}
            style={props.inputStyle}
            name={i}
            onKeyPress={(event) => {
              if (props.inputType === "number") return numberOnly(event);
              if (props.inputType === "string") return stringOnly(event);
              return false;
            }}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
            onClick={(e) => {
              props.onClick(pinValue.find((x) => x.id === i));
            }}
            onChange={(e) => {
              onChange(e, i);
              try {
                e.currentTarget.nextSibling.focus();
              } catch (error) {}
            }}
            maxLength={1}
          ></input>
        </Fragment>
      ))}
    </form>
  );
}

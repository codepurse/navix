import React, { Fragment, useCallback, useEffect, useState } from "react";

export default function Pin(props) {
  const [value, setValue] = useState({});
  const numberOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const onChange = useCallback(
    (e) => {
      const {
        target: { value, name },
      } = e;

      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [value]
  );

  useEffect(
    (e) => {
      props.onChange(value);
    },
    [value]
  );

  const propsStyle = {
    marginRight: props.spacing ? props.spacing + "px" : "",
  };
  return (
    <form className="nvxPinWrapper">
      {Array.from({ length: props.count }, (_, i) => (
        <Fragment key={i}>
          <input
            type="text"
            className="nvxPinInput"
            style={propsStyle}
            name={"pin" + i}
            onKeyPress={(event) => {
              numberOnly(event);
            }}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
            onChange={(e) => {
              onChange(e);
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

import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Style from "style-it";

SegmentedButton.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  value: PropTypes.array,
  fill: PropTypes.bool,
};

export default function SegmentedButton(props) {
  const randomName = Math.random();
  const [id, setId] = useState(props.value[0].id);

  const propsStyle = {
    cursor: "not-allowed",
  };

  useEffect(
    (e) => {
      if (props.selected) {
        setId(props.value[props.selected - 1].id);
      }
    },
    [props.selected]
  );

  const listItems = props.value?.map((event, i) => (
    <Fragment key={i}>
      <input
        id={event.id}
        name={randomName}
        type="radio"
        disabled={event.disabled ? true : false}
        checked={id === event.id}
        onChange={(e) => {
          setId(event.id);
          props.onSelect(event.id);
        }}
      />
      <label
        datacustom="green"
        htmlFor={event.id}
        style={event.disabled ? propsStyle : null}
      >
        {event.label}
      </label>
    </Fragment>
  ));
  return Style.it(
    `
    .segmented-controls label:last-of-type::after  {
      background-color: ${props.onActive?.backgroundColor};
      }
    .segmented-controls input:checked + label {
        color:  ${props.onActive?.color};
      }
    `,
    <div className="segmented-controls">{listItems}</div>
  );
}

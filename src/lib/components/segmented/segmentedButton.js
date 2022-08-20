import { PropTypes } from "prop-types";
import React, { Fragment, useState } from "react";

SegmentedButton.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  value: PropTypes.array,
};

export default function SegmentedButton(props) {
  const randomName = Math.random();
  const [id, setId] = useState(props.value[0].id);
  const propsStyle = {
    cursor: "not-allowed",
  };
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
      <label htmlFor={event.id} style={event.disabled ? propsStyle : null}>
        {event.label}
      </label>
    </Fragment>
  ));
  return <div className="segmented-controls">{listItems}</div>;
}

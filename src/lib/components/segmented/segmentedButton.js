import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Style from "style-it";

SegmentedButton.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  value: PropTypes.array,
  fill: PropTypes.bool,
  className: PropTypes.className,
  onActive: PropTypes.array,
  id: PropTypes.id,
  onChange: PropTypes.func,
  wrapperStyle: PropTypes.array,
  backgroundColor: PropTypes.string,
  elipsis: PropTypes.bool,
  onClick: PropTypes.func,
};

SegmentedButton.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  onSelect: () => {},
  elipsis: false,
};

export default function SegmentedButton(props) {
  const randomName = Math.random();
  const [id, setId] = useState(props.value[0].id);

  const propsStyle = {
    cursor: "not-allowed",
    opacity: "0.5",
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
        onClick={props.onClick}
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
        {props.elipsis ? <span>{event.label}</span> : event.label}
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
    <div
      className={"segmented-controls " + props?.className}
      style={props?.wrapperStyle}
      id={props?.id}
    >
      {listItems}
    </div>
  );
}

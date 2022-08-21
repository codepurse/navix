import React, { Fragment, useEffect, useState } from "react";
import { RadioContext } from "../../context/radioContext";

export default function RadioGroup(props) {
  const [count, setCount] = useState();

  useEffect(
    (e) => {
      setCount(props.children.length);
    },
    [props]
  );
  return (
    <RadioContext.Provider
      value={{ default: props.defaultCheck, name: Math.random() }}
    >
      <form
        className="nvxRadioGroup"
        onChange={(e) => {
          props.onChange(e.target, e.target.id);
        }}
      >
        {(() => {
          if (count > 0) {
            return (
              <Fragment>
                {props.children
                  .filter((event) => event.type?.name.includes("Radio"))
                  .map((filteredComponent, key) => (
                    <Fragment key={key}>
                      {(() => {
                        return <>{filteredComponent}</>;
                      })()}
                    </Fragment>
                  ))}
              </Fragment>
            );
          } else {
            return (
              <div style={{ display: "inline-block" }}>{props.children}</div>
            );
          }
        })()}
      </form>
    </RadioContext.Provider>
  );
}
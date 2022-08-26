import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";

Steps.propTypes = {
  withNum: PropTypes.bool,
};

export default function Steps(props) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(
    (e) => {
      if (props.children?.length) {
        setCount(props.children.length);
      }
    },
    [props]
  );

  useEffect(
    (e) => {
      var progress = document.querySelector("#progress");
      progress.style.width = (100 * (step - 1)) / (count - 1) + "%";
    },
    [step, count]
  );
  return (
    <div className="container">
      <div className="steps">
        <div id="progress" />

        {(() => {
          if (count > 1) {
            return (
              <Fragment>
                {props.children
                  .filter((event) => event.props.__TYPE === "StepsList")
                  .map((filteredComponent, key) => (
                    <Fragment key={key}>
                      {(() => {
                        return (
                          <span
                            id={step - 1 === key ? "stepsPulse" : ""}
                            className={step > key ? "step active " : "step"}
                          >
                            {props.withNum ? (
                              key + 1
                            ) : filteredComponent.props.icon ? (
                              <filteredComponent.props.icon />
                            ) : (
                              ""
                            )}
                          </span>
                        );
                      })()}
                    </Fragment>
                  ))}
              </Fragment>
            );
          } else {
            return <Fragment>{props.children}</Fragment>;
          }
        })()}
      </div>
      <div className="buttons">
        <button
          className="btn"
          id="prev"
          onClick={(e) => {
            setStep(step - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          id="next"
          onClick={(e) => {
            setStep(step + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

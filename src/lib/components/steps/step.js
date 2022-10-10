import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Style from "style-it";
import StepsList from "./stepsList";

Steps.propTypes = {
  withNum: PropTypes.bool,
  selected: PropTypes.number,
  lineColor: PropTypes.string,
  withAnimation: PropTypes.bool,
};

Steps.defaultProps = {
  selected: 1,
  withAnimation: true,
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

  useEffect(
    (e) => {
      if (props.selected) {
        setStep(props.selected);
      }
    },
    [props.selected]
  );
  return Style.it(
    `
    .nvxStepsInner .steps .step.active {
      border: 2px solid ${props?.bgColorActive ?? "#00679d"};
      background-color: ${props?.bgColorActive ?? "#00679d"};
      color: ${props?.color ?? "white"};
    }
    .nvxStepsInner .steps #progress {
      background-color: ${props?.borderColorActive ?? "#424242"}
    }
    #stepsPulse {
      animation: pulse ${props?.withAnimation ? "2s" : "0s"} infinite;
    }
    `,
    <div className="nvxStepsInner">
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
                          <StepsList
                            withNum={props?.withNum}
                            num={key + 1}
                            id={step - 1 === key ? "stepsPulse" : ""}
                            className={step > key ? "step active " : "step"}
                            {...filteredComponent.props}
                          ></StepsList>
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
    </div>
  );
}

import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { AccordionContext } from "../../context/accordionContext";

Accordion.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Accordion.defaultProps = {
  onClick: () => {},
  onChange: () => {},
};

export default function Accordion(props) {
  const [count, setCount] = useState(0);

  useEffect(
    (e) => {
      if (props.children?.length) {
        setCount(props.children.length);
      }
    },
    [props]
  );
  return (
    <div className="nvxAccordion">
      <AccordionContext.Provider value={props}>
        <Fragment>
          {(() => {
            if (count > 1) {
              return (
                <Fragment>
                  {props.children
                    .filter((event) => event.props.__TYPE === "AccordionItem")

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
              return <Fragment>{props.children}</Fragment>;
            }
          })()}
        </Fragment>
      </AccordionContext.Provider>
    </div>
  );
}

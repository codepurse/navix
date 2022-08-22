import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { TabContext } from "../../context/tabsContext";

const TAB_VARIANT = ["borderline", "rounded"];

Tabs.propTypes = {
  tabs: PropTypes.array,
  variant: PropTypes.oneOf(TAB_VARIANT),
  onclick: PropTypes.func,
  backDrop: PropTypes.string,
  centered: PropTypes.bool,
  defaultKey: PropTypes.string,
};

export default function Tabs(props) {
  const [activeKey, setActiveKey] = useState(null);
  const [countHeader, setCountHeader] = useState();
  const [countContent, setCountContent] = useState();
  const [variant, setVariant] = useState("");
  const propStyle = {
    backgroundColor: props.backDrop,
    variant: props.variant,
  };

  const centered = {
    justifyContent: "center",
    display: "flex",
  };

  useEffect(
    (e) => {
      var filteredHeader = props.children.filter(function (element) {
        return element.type?.name.includes("TabHeader");
      }).length;
      var filteredContent = props.children.filter(function (element) {
        return element.type?.name.includes("TabContent");
      }).length;
      setCountContent(filteredContent);
      setCountHeader(filteredHeader);
      setVariant(props.variant);
      if (props.defaultKey) {
        setActiveKey(props.defaultKey);
      }
    },
    [props.children]
  );

  return (
    <div id="tsum-tabs">
      <main style={props.centered ? centered : null}>
        <TabContext.Provider value={{ propStyle, activeKey, variant }}>
          {(() => {
            if (countHeader > 1) {
              return (
                <Fragment>
                  {props.children
                    .filter((event) => event.type?.name.includes("TabHeader"))
                    .map((filteredComponent, key) => (
                      <Fragment key={key}>
                        {(() => {
                          return (
                            <span
                              onClick={(e) => {
                                if (filteredComponent.props.disable) {
                                  e.preventDefault();
                                  return;
                                } else {
                                  try {
                                    filteredComponent.props.onClick();
                                  } catch (error) {
                                    console.log(error);
                                  }
                                  setActiveKey(filteredComponent.props.id);
                                  console.log(filteredComponent.props.id);
                                }
                              }}
                            >
                              {filteredComponent}
                            </span>
                          );
                        })()}
                      </Fragment>
                    ))}
                </Fragment>
              );
            } else {
              return <Fragment> {props.children}</Fragment>;
            }
          })()}
        </TabContext.Provider>
      </main>
      <div>
        {(() => {
          if (countContent > 0) {
            return (
              <Fragment>
                {props.children
                  .filter((event) => event.type?.name.includes("TabContent"))
                  .map((filteredComponent, key) => (
                    <Fragment key={key}>
                      {(() => {
                        if (activeKey === filteredComponent.props.id) {
                          return <div>{filteredComponent.props.children}</div>;
                        }
                      })()}
                    </Fragment>
                  ))}
              </Fragment>
            );
          }
        })()}
      </div>
    </div>
  );
}

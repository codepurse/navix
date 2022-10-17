import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { TabContext } from "../../context/tabsContext";
import Box from "../box/box";

const TAB_VARIANT = ["borderline", "rounded"];

const TAB_ALIGN = ["evenly, center, start, end"];

Tabs.propTypes = {
  tabs: PropTypes.array,
  variant: PropTypes.oneOf(TAB_VARIANT),
  onClick: PropTypes.func,
  backDrop: PropTypes.string,
  centered: PropTypes.bool,
  defaultKey: PropTypes.string,
  align: PropTypes.oneOf(TAB_ALIGN),
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  align: "start",
  onChange: () => {},
  onClick: () => {},
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

  const style = {
    justifyContent: props.align,
    display: "flex",
  };

  useEffect(
    (e) => {
      var filteredHeader = props.children.filter(function (element) {
        return element.props.__TYPE === "TabHeader";
      }).length;
      var filteredContent = props.children.filter(function (element) {
        return element.props.__TYPE === "TabContent";
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

  useEffect(
    (e) => {
      props.onChange(activeKey);
    },
    [activeKey]
  );

  return (
    <Box id="nvxTsum-tabs" {...props}>
      <Box id="nvxTsum-tabs-main" style={style}>
        <TabContext.Provider value={{ propStyle, activeKey, variant }}>
          {(() => {
            if (countHeader > 1) {
              return (
                <Fragment>
                  {props.children
                    .filter((event) => event.props.__TYPE === "TabHeader")
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
                                    if (!filteredComponent.props.disabled) {
                                      filteredComponent.props.onClick();
                                    }
                                  } catch (error) {}

                                  if (!filteredComponent.props.disabled) {
                                    setActiveKey(filteredComponent.props.id);
                                  }
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
      </Box>
      {(() => {
        if (countContent > 0) {
          return (
            <Fragment>
              {props.children
                .filter((event) => event.props.__TYPE === "TabContent")
                .map((filteredComponent, key) => (
                  <Fragment key={key}>
                    {(() => {
                      if (activeKey === filteredComponent.props.id) {
                        return (
                          <Fragment>
                            <div className="nvxTabContent">
                              {filteredComponent.props.children}
                            </div>
                          </Fragment>
                        );
                      }
                    })()}
                  </Fragment>
                ))}
            </Fragment>
          );
        }
      })()}
    </Box>
  );
}

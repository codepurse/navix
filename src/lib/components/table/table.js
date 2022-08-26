import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";

Table.propTypes = {
  fill: PropTypes.bool,
};

export default function Table(props) {
  const [count, setCount] = useState(0);
  const [countData, setCountData] = useState(0);
  const [data, setData] = useState(props?.children);

  const propStyle = {
    width: props.fill ? "100%" : "",
  };
  useEffect(
    (e) => {
      if (props.children.length > 0) {
        var filteredHeader = props.children.filter(function (element) {
          return element.props.__TYPE === "TblHeader";
        }).length;
        var filteredData = props.children.filter(function (element) {
          return element.props.__TYPE === "TblData";
        }).length;
        setCount(filteredHeader);
        setCountData(filteredData);
      }
      setData(props.children);
      console.log(props.children);
    },
    [props.children]
  );

  const SingleReturn = () => {
    try {
      if (
        data.props.__TYPE === "TblHeader" ||
        data.props.__TYPE === "TblData"
      ) {
        return <tr>{data}</tr>;
      }
    } catch (error) {
      return <></>;
    }
  };
  return (
    <table className="nvxTable" style={propStyle}>
      {count > 0 ? (
        <tr>
          {props.children
            .filter((event) => event.props.__TYPE === "TblHeader")
            .map((filteredComponent, key) => (
              <Fragment key={key}>{filteredComponent}</Fragment>
            ))}
        </tr>
      ) : (
        ""
      )}
      {countData > 0 ? (
        <tbody>
          <tr>
            {props.children
              .filter((event) => event.props.__TYPE === "TblData")
              .map((filteredComponent, key) => (
                <Fragment key={key}>{filteredComponent}</Fragment>
              ))}
          </tr>
        </tbody>
      ) : (
        ""
      )}
      {countData < 1 || count < 1 ? <SingleReturn /> : ""}
    </table>
  );
}

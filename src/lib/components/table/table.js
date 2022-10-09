import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import Style from "style-it";

const TABLE_VARIANT = ["striped", "basic"];
const TABLE_LAYOUT = ["auto", "fixed"];

TableNvx.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  variant: PropTypes.oneOf(TABLE_VARIANT),
  stripedColor: PropTypes.string,
  onSortChange: PropTypes.func,
  layout: PropTypes.oneOf(TABLE_LAYOUT),
  className: PropTypes.string,
  emptyText: PropTypes.bool,
  _styleHeader: PropTypes.array,
  rowClick: PropTypes.func,
  style: PropTypes.array,
  styleComponents: PropTypes.array,
};

TableNvx.defaultProps = {
  data: [],
  columns: [],
  variant: "basic",
  onSortChange: () => {},
  layout: "auto",
  emptyText: false,
  className: "",
  _styleHeader: [],
  rowClick: () => {},
  style: [],
  styleComponents: [],
};

export default function TableNvx(props) {
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [dataTable, setData] = useState([]);
  const [origData, setOrigData] = useState([]);
  useEffect(
    (e) => {
      props.onSortChange({ order: orderBy, sortby: sortBy });
    },
    [orderBy]
  );
  useEffect(
    (e) => {
      setData(props.data);
      setOrigData(props.data.slice());
    },
    [props]
  );

  const propsStyle = {
    tableLayout: props.layout,
    ...props?.style,
  };

  return Style.it(
    `
    tr:nth-child(even) {
        background-color: ${
          props.variant === "striped"
            ? `${props.stripedColor ?? "#f5f5f5"}`
            : ""
        }
      }
      ${props?.styleComponents}
    `,
    <div>
      <table className={"nvxTable " + props.className} style={propsStyle}>
        <thead>
          <tr>
            {props.columns.map((data, i) => (
              <th
                key={i}
                style={
                  data._style
                    ? data._style
                    : props?._styleHeader
                    ? props?._styleHeader
                    : ""
                }
              >
                {data.headerName}{" "}
                {data?.sortable ? (
                  <i
                    className="nvxTableSortIcon"
                    onClick={(e) => {
                      setSortBy(data.key);
                      if (sortBy === "" || sortBy !== data.key) {
                        setOrderBy("asc");
                        const strAscending = [...dataTable].sort((a, b) =>
                          a[data.key] > b[data.key] ? 1 : -1
                        );
                        setData(strAscending);
                      } else {
                        if (orderBy === "asc") {
                          setOrderBy("desc");
                          const strDescending = [...dataTable].sort((a, b) =>
                            a[data.key] > b[data.key] ? -1 : 1
                          );
                          setData(strDescending);
                        } else if (orderBy === "desc") {
                          setOrderBy("");
                          setSortBy("");
                          setData(origData);
                        } else {
                          setOrderBy("asc");
                          const strAscending = [...dataTable].sort((a, b) =>
                            a[data.key] > b[data.key] ? 1 : -1
                          );
                          setData(strAscending);
                        }
                      }
                    }}
                  >
                    {sortBy !== data.key ? (
                      <TiArrowUnsorted />
                    ) : orderBy === "asc" ? (
                      <TiArrowSortedUp />
                    ) : (
                      <TiArrowSortedDown />
                    )}
                  </i>
                ) : (
                  ""
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, i) => (
            <tr
              key={i}
              onClick={(e) => {
                props.rowClick(data);
              }}
            >
              {props?.columns?.map((col, j) => {
                return (
                  <td key={j} style={data?._style}>
                    {typeof data[col.key] === "function"
                      ? React.createElement(data[col.key], { data: data })
                      : data[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
          {dataTable.length === 0 ? (
            props?.emptyText ? (
              <p className="nvxTableEmpty">No data found</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
}

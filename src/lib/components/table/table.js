import { PropTypes } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import Style from "style-it";
import Tooltip from "../tooltip/tooltip";
import LoadingTable from "./loadingTable";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import Space from "../space/space";

const TABLE_VARIANT = ["striped", "basic"];
const TABLE_LAYOUT = ["auto", "fixed"];
const BUTTON_VARIANT = ["delete", "edit", "view"];

Table.propTypes = {
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
  isLoading: PropTypes.bool,
  styleComponents: PropTypes.array,
  loadingCount: PropTypes.number,
  defaultActions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(BUTTON_VARIANT),
      title: PropTypes.string.isRequired,
      // onClick parameter 1: event handled, parameter 2: data of row
      onClick: PropTypes.func.isRequired,
    })
  ),
};

Table.defaultProps = {
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
  isLoading: false,
  defaultActions: [],
};

export default function Table(props) {
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

  const lightTooltip = (action, data) => {
    // match the button variant, if the passed action.type doesn't match then it will be ignored
    let actionType = BUTTON_VARIANT.find((el) => el === action.type);

    return (
      <Tooltip content={action.title} direction="top">
        {actionType !== undefined && (
          <ButtonIcon
            variant={actionType}
            onClick={(e) => {
              action.onClick(e, data);
            }}
            size="md"
          />
        )}
      </Tooltip>
    );
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
                {typeof data.headerName === "function" ? (
                  React.createElement(data.headerName, { data: data })
                ) : (
                  <Fragment>
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
                              const strDescending = [...dataTable].sort(
                                (a, b) => (a[data.key] > b[data.key] ? -1 : 1)
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
                  </Fragment>
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
                if (props.defaultActions.length !== 0 && col.key === "action") {
                  return null;
                } else {
                  return (
                    <td key={j} style={data?._style}>
                      {typeof data[col.key] === "function"
                        ? React.createElement(data[col.key], { data: data })
                        : data[col.key]}
                    </td>
                  );
                }
              })}

              {props.defaultActions.length !== 0 && (
                <td style={data?._style}>
                  <Space gap={5}>
                    {props?.defaultActions?.map((action) => {
                      return lightTooltip(action, data);
                    })}
                  </Space>
                </td>
              )}
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
          {props.isLoading ? (
            <LoadingTable count={props.loadingCount ?? props.columns.length} />
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

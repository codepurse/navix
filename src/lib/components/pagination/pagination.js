import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { IoCaretBackOutline, IoCaretForward } from "react-icons/io5";

const PAGINATION_SHAPE = ["rounded", "box"];

PaginationHooks.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onPageChange: PropTypes.func,
  type: PropTypes.string,
  shape: PropTypes.oneOf(PAGINATION_SHAPE),
  borderless: PropTypes.bool,
  style: PropTypes.array,
  selectedStyle: PropTypes.array,
  withArrow: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

PaginationHooks.defaultProps = {
  onPageChange: () => {},
  initialPage: 1,
  shape: "box",
  borderless: false,
  withArrow: true,
  disabled: false,
};

export default function PaginationHooks(props) {
  const [totalRecords, setTotalRecords] = useState("");
  const [pageLimit, setPageLimit] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [pagesToShow, setPagetoShow] = useState("");

  useEffect((e) => {
    setTotalRecords(props.totalRecords);
    setPageLimit(props.pageLimit || 1);
    setTotalPages(Math.ceil(props.totalRecords / props.pageLimit));
    setPagetoShow(props.pageToShow || 5);
    setCurrentPage(props.initialPage || 1);
  }, []);

  const setPage = (page) => {
    var x = page;
    if (x < 1) {
      x = 1;
    } else if (x > totalPages) {
      x = totalPages;
    }

    setCurrentPage(x);

    var startIndex = (x = 1) * pageLimit;
    var endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    try {
      props.onPageChange({
        pageLimit,
        totalPages,
        page,
        startIndex,
        endIndex,
      });
    } catch (error) {}
  };

  const getPager = () => {
    var total = totalPages;
    var pagestoshow = pagesToShow;
    var currentpage = currentPage;
    var totalpages = totalPages;
    var pages = [];
    var startFromNumber = "";

    if (totalpages <= pagestoshow) {
      startFromNumber = 1;
      pagestoshow = totalpages;
    } else {
      if (currentpage <= Math.ceil(pagestoshow / 2)) {
        startFromNumber = 1;
      } else if (
        currentpage + Math.floor((pagestoshow - 1) / 2) >=
        totalpages
      ) {
        startFromNumber = totalpages - (pagestoshow - 1);
      } else {
        startFromNumber = currentpage - Math.floor(pagestoshow / 2);
      }
    }

    for (let i = 1; i <= pagestoshow; i++) {
      pages.push(startFromNumber++);
    }
    return {
      currentpage,
      totalpages,
      pages,
      total,
    };
  };

  function setClassName(e) {
    switch (e) {
      case "filled":
        return "nvxActiveFilled";
      default:
        return "nvxActive";
    }
  }

  const propsStyle = {
    border: props.borderless ?? "0px",
    borderRadius: props.shape === "rounded" ? "50px" : "",
    ...props.style,
  };

  return (
    <div>
      {(() => {
        if (!totalRecords || totalPages === 1) {
          return null;
        } else {
          return (
            <div className={"nvxPagination " + props?.wrapperClassName}>
              <ul className="nvxUlPagination">
                {props.withArrow ? (
                  <Fragment>
                    {" "}
                    <li>
                      <button
                        className="vertical-align"
                        style={propsStyle}
                        disabled={getPager().currentpage === 1 ? true : false}
                        onClick={() => {
                          setPage(1);
                        }}
                      >
                        <i>
                          <IoMdSkipBackward />
                        </i>
                      </button>
                    </li>
                    <li>
                      <button
                        className="vertical-align"
                        style={propsStyle}
                        disabled={getPager().currentPage === 1 ? true : false}
                        onClick={() => setPage(getPager().currentpage - 1)}
                      >
                        <i>
                          <IoCaretBackOutline />
                        </i>
                      </button>
                    </li>
                  </Fragment>
                ) : null}
                {getPager().pages?.map((page, index) => (
                  <li key={index}>
                    <button
                      style={
                        (propsStyle,
                        getPager().currentpage === page
                          ? props?.selectedStyle
                          : null)
                      }
                      className={
                        getPager().currentpage === page
                          ? setClassName(props.type)
                          : ""
                      }
                      onClick={() => {
                        setPage(page);
                      }}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                {props.withArrow ? (
                  <Fragment>
                    {" "}
                    <li>
                      <button
                        style={propsStyle}
                        className="vertical-align"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={() => setPage(currentPage + 1)}
                      >
                        <i>
                          <IoCaretForward />
                        </i>
                      </button>
                    </li>
                    <li>
                      <button
                        style={propsStyle}
                        className="vertical-align"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={() => setPage(totalPages)}
                      >
                        <i>
                          <IoMdSkipForward />
                        </i>
                      </button>
                    </li>
                  </Fragment>
                ) : null}
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}

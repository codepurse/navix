import React from "react";

export default function Pagination() {
  const num = 5;
  const numbers = [1, 2, 3, 4, 5];
  const listItems = [Array(5)].map((number) => (
    <li key={number.toString()}>
      <a>{number}</a>
    </li>
  ));
  return (
    <div className="nvxPagination">
      <ul>
        <li className="nvxLiBck">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </li>
        {Array.from(
          { length: num },
          (_, i) =>
            i < 5 && (
              <li style={{ color: i === 2 ? "tomato" : "white" }}>
                <a>{i}</a>
              </li>
            )
        )}
        <li className="nvxLiNxt">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

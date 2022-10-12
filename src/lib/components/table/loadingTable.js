import React from "react";
export default function loadingTable(props) {
  return (
    <tr>
      {Array.apply(null, { length: props.count }).map((e, i) => (
        <td className="nvxTdLoad" key={i}>
          <div></div>
        </td>
      ))}
    </tr>
  );
}

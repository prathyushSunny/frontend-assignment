import React from "react";
import "./table.css";

function Table({ pageData }) {
  return (
    <div className="table-parent">
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((item, index) => (
            <tr key={index}>
              <td>{item["s.no"]}</td>
              <td>{item["percentage.funded"]}</td>
              <td>{item["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

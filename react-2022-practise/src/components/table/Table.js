import React from "react";
import inputData from "./InputData.json";

const Table = () => {
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title </th>
            <th>Price </th>
            <th>Category </th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((evt, key) => {
            return (
              <tr key={key}>
                <td>{evt.id}</td>
                <td>{evt.title}</td>
                <td>{evt.price}</td>
                <td>{evt.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

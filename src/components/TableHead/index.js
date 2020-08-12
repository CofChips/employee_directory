import React from "react";
import "./style.css";

function TableHead() {
  return (
    <thead>
    <tr className="text-center">
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th score="col">DOB</th>
    </tr>
  </thead>
  );
}

export default TableHead;
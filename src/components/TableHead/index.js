import React from "react";
import "./style.css";

function TableHead(props) {
  return (
    <thead>
    <tr className="text-center">
      <th scope="col">Image</th>
      <th value="name" scope="col">Name &nbsp; <span value="name" onClick={props.onClickA}><i value="name" className="fa fa-caret-up caret"></i></span> &nbsp; <span onClick={props.onClickD}><i value="name" className="fa fa-caret-down caret"></i></span></th>
      <th scope="col">Phone &nbsp; <span onClick={props.onClickA}><i value = "phone" className="fa fa-caret-up caret"></i></span> &nbsp; <span onClick={props.onClickD}><i value = "phone" className="fa fa-caret-down caret"></i></span></th>
      <th scope="col">Email &nbsp; <span onClick={props.onClickA}><i value = "email" className="fa fa-caret-up caret"></i></span> &nbsp; <span onClick={props.onClickD}><i value = "email" className="fa fa-caret-down caret"></i></span></th>
      <th score="col">DOB &nbsp; <span id="dob" onClick={props.onClickA}><i value = "year" className="fa fa-caret-up caret"></i></span> &nbsp; <span onClick={props.onClickD}><i value = "year" className="fa fa-caret-down caret"></i></span></th>
    </tr>
  </thead>
  );
}

export default TableHead;
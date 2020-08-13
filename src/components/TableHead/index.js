import React from "react";
import "./style.css";

function TableHead(props) {
  return (
    <thead>
    <tr className="text-center">
      <th scope="col">Image</th>
      <th id="name" scope="col">Name &nbsp; <span id="name" onClick={props.onClickNameA}><i className="fa fa-caret-up"></i></span> &nbsp; <span onClick={props.onClickNameD}><i className="fa fa-caret-down"></i></span></th>
      <th scope="col">Phone &nbsp; <span onClick={props.onClickPhoneA}><i className="fa fa-caret-up"></i></span> &nbsp; <span onClick={props.onClickPhoneD}><i className="fa fa-caret-down"></i></span></th>
      <th scope="col">Email &nbsp; <span onClick={props.onClickEmailA}><i className="fa fa-caret-up"></i></span> &nbsp; <span onClick={props.onClickEmailD}><i className="fa fa-caret-down"></i></span></th>
      <th score="col">DOB &nbsp; <span id="dob" onClick={props.onClickdobA}><i className="fa fa-caret-up"></i></span> &nbsp; <span onClick={props.onClickdobD}><i className="fa fa-caret-down"></i></span></th>
    </tr>
  </thead>
  );
}

export default TableHead;
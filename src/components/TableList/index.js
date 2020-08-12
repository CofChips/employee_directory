import React from "react";
import "./style.css";

function TableList(props) {
  return (

    <tr>
      <td><img className="image" alt={props.name} src={props.image}/></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>


  );
}

export default TableList;
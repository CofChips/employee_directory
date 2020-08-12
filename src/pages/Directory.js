import React, { useEffect, useState } from "react";
// import API from "../utils/API";
// import UserContext from "../utils/userContext";
// import CardContainer from "../components/CardContainer";
// import Row from "../components/Row";
// import LanguageContext from "../utils/LanguageContext";
// import LanguageSelector from "../components/LanguageSelector";
import TableHead from "../components/TableHead/index";
import "./Directory.css"
import Employees from "../Employees.json";
import TableList from "../components/TableList/index"


function Directory(){
    const employees = Employees.map((employee) =>
    <TableList key={employee.id.toString()}
        name={employee.name}
        image={employee.image}
        phone={employee.phone}
        email={employee.email}
        dob={employee.dob}
    />

)
    return (
        <table className="table table-striped mt-5">   

        <TableHead />
        <tbody className="text-center">
            {employees}
        </tbody>

        </table>

    )
}

export default Directory;

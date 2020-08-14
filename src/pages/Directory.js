import React, { useState } from "react";
import TableHead from "../components/TableHead/index";
import Employees from "../Employees.json";
import TableList from "../components/TableList/index";
import Search from "../components/Search/index"

const Directory = () => {
    const [employees, setEmployees] = useState(Employees);
    const [listEmployee, setListEmployee] = useState(employees);

    const handleInputChange = event => {
        let value = event.target.value;
        console.log("value pass: ", value)
        let newArray = []
        let employeeState = employees
        let lowerValue = value.toLowerCase();
        if (value) {
            for (let i = 0; i < employeeState.length; i++) {
                if (employeeState[i].name.toLowerCase().includes(lowerValue) || employeeState[i].email.toLowerCase().includes(lowerValue) || employeeState[i].dob.includes(value) || employeeState[i].phone.includes(value)) {
                    newArray.push(employeeState[i])
                }
            }
            setListEmployee(newArray)
        }
        else {
            setListEmployee(employeeState)
        }

    }

    const handleAscend = (id) => {
        console.log("this is the ascend id: ", id);
        console.log("this is the sorted list: ", selectionSort(employees, id))
        
        setListEmployee([...selectionSort(employees, id)])
    }

    const handleDescend = (id) => {
        console.log("this is the ascend id: ", id)
        setListEmployee([...selectionSortD(employees, id)])
    }

    const swap = (items, firstIndex, secondIndex) => {
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    const selectionSort = (items, input) => {
        var newArray = items
        var len = newArray.length;
        var min;

        for (var i = 0; i < len; i++) {
            min = i;
            for (var j = i + 1; j < len; j++) {
                if (newArray[j][input] < newArray[min][input]) {
                    min = j;
                }
            }
            if (i !== min) {
                swap(items, i, min);
            }
        }
        return newArray;
    }

    const selectionSortD = (items, input) => {
        var newArray = items
        var len = newArray.length;
        var min;
        for (var i = 0; i < len; i++) {
            min = i;
            for (var j = i + 1; j < len; j++) {
                if (newArray[j][input] > newArray[min][input]) {
                    min = j;
                }
            }
            if (i !== min) {
                swap(items, i, min);
            }
        }
        return newArray;
    }

    const employeesList = listEmployee.map((employee) =>
        <TableList key={employee.id.toString()}
            name={employee.name}
            image={employee.image}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
        />)

    return (
        <div>
            <Search onChange={handleInputChange} />
            <div className="container">
                <table className="table table-striped mt-5">
                    <TableHead onClickA={(e) => handleAscend(e.target.getAttribute("value"))} onClickD={(e) => handleDescend(e.target.getAttribute("value"))} />
                    <tbody className="text-center">
                        {employeesList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Directory;

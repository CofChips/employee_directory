import React, { useEffect, useState, Component } from "react";
// import API from "../utils/API";
// import UserContext from "../utils/userContext";
// import CardContainer from "../components/CardContainer";
// import Row from "../components/Row";
// import LanguageContext from "../utils/LanguageContext";
// import LanguageSelector from "../components/LanguageSelector";
import TableHead from "../components/TableHead/index";
import "./Directory.css"
import Employees from "../Employees.json";
import TableList from "../components/TableList/index";
import Search from "../components/Search/index"

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(items) {

    var len = items.length;
    var min;

    for (var i = 0; i < len; i++) {


        min = i;


        for (var j = i + 1; j < len; j++) {
            if (items[j].email > items[min].email) {
                min = j;
            }
        }

        if (i !== min) {
            swap(items, i, min);
        }
    }

    return items;
}

class Directory extends Component {
    // Setting the component's initial state
    state = {
      Employees,
      search: "",
      ListEmployee: Employees
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        console.log(value)
        // const name = event.target.name;
    
        // if (name === "password") {
        //   value = value.substring(0, 15);
        // }
        // Updating the input's state
        this.setState({
          search: value
        });
        console.log("value:",value)
        this.handleEmployeeSearch(value);
      };

      handleEmployeeSearch = (value) => {
          console.log("this is the search")
          console.log("value pass: ",value)
          console.log(this.state.Employees)
          console.log(this.state.Employees[0].name)

          if(this.state.Employees[0].name.includes(value)){
              console.log("This works")
          }
          let newArray = []
          let employeeState = this.state.Employees
          let lowerValue = value.toLowerCase();
          let stringValue = value.toString();
          if(value){
            for (let i = 0; i<employeeState.length; i++){
                if(employeeState[i].name.toLowerCase().includes(lowerValue) || employeeState[i].phone.includes(stringValue) || employeeState[i].email.toLowerCase().includes(lowerValue) || employeeState[i].dob.includes(stringValue)  ){
                    newArray.push(employeeState[i])
                }
                
            }
            console.log(newArray)
            this.setState({ ListEmployee: newArray})
  
            console.log("New Emp: ", this.state.Employees)
          }
          else{
            this.setState({ ListEmployee: employeeState})
          }

      }

    // const [employeeList, setEmployeeList] = useState(Employees);

    // const [search, setSearch] = useState();



    // for sorting - start -

    //   -end-


    render (){
        const employees = this.state.ListEmployee.map((employee) =>
        <TableList key={employee.id.toString()}
            name={employee.name}
            image={employee.image}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
        />

    )
        return (
            <div>
                <Search onChange = {this.handleInputChange}/>
    
            <table className="table table-striped mt-5">
    
                <TableHead />
                <tbody className="text-center">
                    {employees}
                </tbody>
    
            </table>
            </div>
    
        )
    }
    
}

export default Directory;

// onChange={e => setPassword(e.target.value)}
import React, { useEffect, useState, Component } from "react";
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

function selectionSort(items, input) {
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

function selectionSortD(items, input) {
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

class Directory extends Component {

    state = {
      Employees,
      search: "",
      ListEmployee: Employees
    };

    handleInputChange = event => {

        let value = event.target.value;
        console.log(value)

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
          if(value){
            for (let i = 0; i<employeeState.length; i++){
                if(employeeState[i].name.toLowerCase().includes(lowerValue) || employeeState[i].email.toLowerCase().includes(lowerValue) || employeeState[i].dob.includes(value) || employeeState[i].phone.includes(value) ){
                    newArray.push(employeeState[i])
                }
            }
            this.setState({ ListEmployee: newArray})
          }
          else{
            this.setState({ ListEmployee: employeeState})
          }

      }

      handleAscend = (id) => { 
          console.log("this is the ascend id: ",id)
          this.setState({ ListEmployee: selectionSort(this.state.Employees,id)})
      }

      handleDescend = (id) => { 
        console.log("this is the ascend id: ",id)
        this.setState({ ListEmployee: selectionSortD(this.state.Employees,id)})
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
    <div className="container">
    <table className="table table-striped mt-5">
    
    <TableHead onClickA={(e)=>this.handleAscend(e.target.getAttribute("value"))} onClickD={(e)=>this.handleDescend(e.target.getAttribute("value"))} />
    <tbody className="text-center">
        {employees}
    </tbody>

</table>
    </div>

            </div>
    
        )
    }
    
}

export default Directory;

// onChange={e => setPassword(e.target.value)}
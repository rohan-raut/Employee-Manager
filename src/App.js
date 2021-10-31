import React, { useState, useEffect } from 'react'
import Employees from './components/Employees'
import NavBar from './components/NavBar'
import Spinner from './components/Spinner';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddEmployee from './components/AddEmployee';



const App = () => {

  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  const onRemove = (employee) => {
    console.log("please remove me!", employee);
    setEmployees(employees.filter((e) => {
      return e !== employee;
    }))
  }

  const getEmployees = async () => {
    let url = "http://dummy.restapiexample.com/api/v1/employees";
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setEmployees(parsedData.data)
    setLoading(false)
  }

  useEffect(() => {
    getEmployees();
  }, [])


  const addEmployee=(name, salary, age)=>{
    let employee_id;
    if(employees.length===0){
      employee_id=0;
    }
    else{
      employee_id= employees[employees.length-1].id + 1;
    }
    const newEmployee = {
      id: employee_id,
      employee_name: name,
      employee_salary: salary,
      employee_age: age
    }
    // setEmployees([...employees, newEmployee]);
    employees.push(newEmployee);
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
            {loading && <Spinner/>}
            <Employees employees={employees} loading={loading} onRemove={onRemove}/>
            </>
          )
        }} />

        <Route exact path="/add-employee"><AddEmployee addEmployee={addEmployee} /></Route>
      </Switch>
    </Router>
  )
}

export default App;

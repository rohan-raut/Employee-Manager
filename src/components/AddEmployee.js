import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

const AddEmployee = (props) => {

    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [age, setAge] = useState("")

    let history= useHistory();
    const submit = (e) =>{
        e.preventDefault();
        if(!name || !age || !salary){
            alert("Please fill all the fields.")
        }
        else{
            props.addEmployee(name, salary, age);
        }
        history.push('/');
    }

    return (
        <div className="row justify-content-center my-5">
            <div className="col-md-4 px-5">
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control border border-dark" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Salary</label>
                    <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} class="form-control border border-dark" id="exampleInputSalary" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} class="form-control border border-dark" id="exampleInputAge" />
                </div>
                
                <button type="submit" class="btn btn-primary">Add Employee</button>
            </form>
            </div>
        </div>
    )

}

export default AddEmployee

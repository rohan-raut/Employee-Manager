import React from 'react'



const EmployeeItem = (props) => {

    const {employee, onRemove } = props;

    return (
        <div className="justify-content-center">
            <div className="card" style={{ width: "15rem" }}>
                <img src="profileIcon.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{employee.employee_name}</h5>
                    <p className="card-text">Salary: {employee.employee_salary} $</p>
                    <p className="card-text">Age: {employee.employee_age}</p>
                    <div className="text-center">
                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{onRemove(employee)}}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EmployeeItem

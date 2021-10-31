import EmployeeItem from './EmployeeItem'
import { Link } from "react-router-dom";

const Employees = ({employees, onRemove, loading}) => {

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {(employees.length===0 && !loading)?<h3 className="text-center py-3">No Employees to Display</h3>:
                employees.map((employees) => {
                    return <div className="col-md-4 my-5 d-flex justify-content-center" key={employees.id}>
                        <EmployeeItem employee={employees} onRemove={onRemove} />
                    </div>
                })} 
            </div>
            <div className="row text-center">
                {loading? "": <Link to="/add-employee"><button className="btn btn-primary px-3 ">Add Employee</button></Link> }
                
            </div>
            
            
        </div>
    )
}


export default Employees

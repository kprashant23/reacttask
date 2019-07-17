import React from 'react';
import './EmployeeDetails.css'

const employeeDetails = (props) => {
        return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.gender}</td>
                <td>{props.email}</td>
                <td>{props.phoneNo}</td>
            </tr>
        )
}

export default employeeDetails;
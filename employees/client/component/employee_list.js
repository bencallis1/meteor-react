import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
    console.log(props.employees);
    return (
        <div>
            <div className="employee-list">
                {props.employees.map(employee => <EmployeeDetail /> )}

            </div>
        </div>
    )
};


// Here we are wrapping our component in a container so our component will update with new data anytime that data changes.
export default createContainer(() => {

    // set up the subscription  to out publish from the backend
    Meteor.subscribe('employees');

    // return an object. Whatever we return will be sent to EmployeeList as props
    return { employees: Employees.find({}).fetch() };

}, EmployeeList);

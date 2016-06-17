import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

let PER_PAGE = 20;

this.getMorePeople = function() {
   var newCount =  PER_PAGE + 20;
       PER_PAGE = newCount;
    console.log(newCount)
    return newCount
};

const EmployeeList = (props) => {
    return (
        <div>
            <div className="employee-list">
                {props.employees.map(employee =>
                    <EmployeeDetail key={employee._id} employee={employee} />
                )}

            </div>
            <button onClick={() => Meteor.subscribe('employees',this.getMorePeople()) }
                    className="btn btn-primary">
                Load More...</button>
        </div>
    )
};


// Here we are wrapping our component in a container so our component will update with new data anytime that data changes.
export default createContainer(() => {

    // set up the subscription  to out publish from the backend
    Meteor.subscribe('employees', PER_PAGE);

    // return an object. Whatever we return will be sent to EmployeeList as props
    return { employees: Employees.find({}).fetch() };

}, EmployeeList);

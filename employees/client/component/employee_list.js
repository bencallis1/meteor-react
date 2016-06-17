/**
 * Created by Ben on 6/17/16.
 */

import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const EmployeeList = () => {
    return (
        <div>
            <div className="employee-list"></div>
        </div>
    )
};


// Here we are wrapping our component in a container so our component will update with new data anytime that data changes. 
export default createContainer(() => {

}, EmployeeList);

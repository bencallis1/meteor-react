import _ from 'lodash';
import { image, helpers } from 'faker';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';


Meteor.startup(() => {

    // lets check our collection before we add more fake data
    const numberRecords = Employees.find({}).count();
    if(!numberRecords) {
        // Use the lodash times method instead of a for loop
        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            // Super easy to insert data into our mongodb collection
            Employees.insert({
                name, email,phone,
               avatar: image.avatar()
            });
        });
    }

    // only publish the first 20 records. We had to run meteor remove autopublish firt in our console
    Meteor.publish('employees', function(PER_PAGE) {
        return Employees.find({}, {limit: PER_PAGE});
    });

});

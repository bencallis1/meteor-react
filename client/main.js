import React from 'react';
import ReactDOM from 'react-dom';

import ImageList from './components/imageList';


const App = () => {
   return (
       <div>
            <ImageList />
       </div>
   )
};

// We are going to use this meteor method to run our component when the DOM is ready
Meteor.startup(() => {
   // First arg is the component and the second arg in where you want ot render it to
   ReactDOM.render(<App/>,document.querySelector('.container'));
})

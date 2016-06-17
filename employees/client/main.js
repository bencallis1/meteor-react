import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Hello from the App</div>
    )
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
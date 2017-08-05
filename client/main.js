
//any JS here is auto run for us
console.log('hello');

//import React
import React from 'react';
import ReactDOM from 'react-dom';

//Create A Component
const App = () => {
    return (
        <div>
            React App #2
        </div>
    );
};

//Render the component to the screen
//remember code must wait untill main.html finishes loading or will get error
Meteor.startup(
    () => {
        ReactDOM.render(<App />,document.querySelector('.container'));
    }); //once complete dom is loaded
/////ReactDOM.render(<App />,document.querySelector('.container'));
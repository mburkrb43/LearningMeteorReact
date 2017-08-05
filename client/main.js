
//any JS here is auto run for us
console.log('hello');

//import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/image_list';

//simmple functional styleCreate A Component
//const App = () => {
//    return (
//        <div>
//            <ImageList />
//        </div>
//    );
//};

//class based - provides more conttrol - right way
class App extends Component {

    constructor(props){
        super(props);
        this.state = { images:[] };
    }

    componentWillMount() {
        console.log('App is about to render..runs just once');
        // Make a request for a user with a given ID
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => this.setState( { images: response.data.data})); //remember imgur json
        //always use setState only this.state = on first initialization like above
    }
    render() {
        //console.log(this.state.images);
    return (
        <div>
            <ImageList images={this.state.images} />
        </div>
    );
    }
};


//Render the component to the screen
//remember code must wait untill main.html finishes loading or will get error
Meteor.startup(
    () => {
        ReactDOM.render(<App />,document.querySelector('.container')); //use ONLY once for the root component

        
        //will nest child components
    }); //once complete dom is loaded
/////ReactDOM.render(<App />,document.querySelector('.container'));
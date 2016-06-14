// Any JS in here is automatically ran for us

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component

// Class based compoent
class App extends Component {
  // Automatically called
  constructor(props) {
    super(props);

    // Intialize the state with empty array
    this.state = { images: [] };
  }
  // By puttint eh componentWillMount the rest of application can load while the ajax call is being made
  componentWillMount() {
    // Fantastic place to load data!
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data })); // Here we force a re-render by using this.setState
    // NEVER DO THIS-
    // this.state.image-app = [ {}, {} ];
  }

  // Class based components will always have the render method
  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});

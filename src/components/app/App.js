import React, { Component } from 'react';
import './App.css';
import Slide from '../slide/Slide'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "who cares"
    };
  }

  render() {
    return (
      <div>
        <Slide name={this.state.name}/>
      </div>
    );
  }
}

export default App;

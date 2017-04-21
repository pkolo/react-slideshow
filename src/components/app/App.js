import React, { Component } from 'react';
import './App.css';
import Slide from '../slide/Slide'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    axios.get('../../../data.json')
      .then(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <Slide />
      </div>
    );
  }
}

export default App;

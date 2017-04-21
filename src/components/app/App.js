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
        this.setState({ slides: response.data.slides})
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Slide />
      </div>
    );
  }
}

export default App;

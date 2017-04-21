import React, { Component } from 'react';
import './App.css';
import Slide from '../slide/Slide'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      activeSlideID: 1
    };
  }

  componentDidMount() {
    axios.get('../../../data.json')
      .then(response => {
        this.setState({ slides: response.data.slides})
      })
  }

  getActiveSlide() {
    let activeSlide = this.state.slides.filter(slide => (slide.id === this.state.activeSlideID))
    return activeSlide[0]
  }


  render() {
    return (
      <div>
        {this.state.slides.length > 0 &&
          <Slide slide={this.getActiveSlide()}/>
        }
      </div>
    );
  }
}

export default App;

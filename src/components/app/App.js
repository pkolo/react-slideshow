import React, { Component } from 'react';
import './App.css';
import Slide from '../slide/Slide'
import Bar from '../bar/Bar'
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

  getActiveSlideContent() {
    let activeSlide = this.state.slides.filter(slide => (slide.id === this.state.activeSlideID))
    return activeSlide[0].content
  }

  getSlideIDs() {
    let slideIDs = this.state.slides.map(slide => slide.id)
    return slideIDs
  }

  render() {
    return (
      <div>
        {this.state.slides.length > 0 &&
          <Bar slides={this.getSlideIDs()}/>
        }
        {this.state.slides.length > 0 &&
          <Slide slide={this.getActiveSlideContent()}/>
        }
      </div>
    );
  }
}

export default App;

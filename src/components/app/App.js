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

    this.changeActiveSlide = this.changeActiveSlide.bind(this)
    this.isActive = this.isActive.bind(this)
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

  changeActiveSlide(id) {
    this.setState({activeSlideID: id})
  }

  isActive(id) {
    return (id === this.state.activeSlideID)
  }

  render() {
    return (
      <div className="App-wrapper">
        {this.state.slides.length > 0 &&
          <div className="App-sidebar">
            <Bar slides={this.getSlideIDs()} onSelect={this.changeActiveSlide} isActiveSlide={this.isActive}/>
          </div>
        }
        {this.state.slides.length > 0 &&
          <div className="App-slide">
            <Slide slide={this.getActiveSlideContent()}/>
          </div>
        }
      </div>
    );
  }
}

export default App;

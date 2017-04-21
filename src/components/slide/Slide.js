import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {


  render(props) {
    return (
      <h1>Hell {this.props.slide.title}</h1>
    );
  }
}

export default Slide;

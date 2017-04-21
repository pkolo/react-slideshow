import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {


  render(props) {
    console.log(this)
    return (
      <h1>Hell {this.props.slide.content.title}</h1>
    );
  }
}

export default Slide;

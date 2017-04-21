import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {


  render(props) {
    return (
      <div className="Slide-title">Hell {this.props.slide.title}</div>
    );
  }
}

export default Slide;

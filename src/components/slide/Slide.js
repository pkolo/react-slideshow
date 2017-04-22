import React, { Component } from 'react';
import './Slide.css';
import Overlay from '../overlay/Overlay'

class Slide extends Component {


  render(props) {
    return (
      <div className="Slide-wrapper">
        <div className="Slide-title">{this.props.slide.title}</div>
        {this.props.slide.overlay.map(overlay => <Overlay text={overlay.text} style={overlay.style}/>)}
      </div>
    );
  }
}

export default Slide;

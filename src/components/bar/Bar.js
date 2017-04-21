import React, { Component } from 'react';
import BarButton from '../barbutton/BarButton'

class Bar extends Component {

  getButtonStyle(id) {
    if (this.props.isActiveSlide(id)) {
      return "Slide-active"
    }
    else {
      return "Slide-inactive"
    }
  }

  render(props) {
    return (
      <div>
        {this.props.slides.map(slide =>
          <BarButton key={slide} name={slide} onSelect={this.props.onSelect} style={this.getButtonStyle(slide)}/>
        )}
      </div>
    );
  }
}

export default Bar;

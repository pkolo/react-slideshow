import React, { Component } from 'react';
import BarButton from '../barbutton/BarButton'

class Bar extends Component {


  render(props) {
    return (
      <div>
        {this.props.slides.map(slide =>
          <BarButton key={slide} name={slide}/>
        )}
      </div>
    );
  }
}

export default Bar;

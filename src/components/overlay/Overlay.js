import React, { Component } from 'react';

class Overlay extends Component {


  render() {
    return (
      <div style={this.props.style}>{this.props.text}</div>
    );
  }
}

export default Overlay;

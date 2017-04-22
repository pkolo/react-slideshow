import React, { Component } from 'react';

class Overlay extends Component {


  render() {
    return (
      <h1 style={this.props.style}>{this.props.text}</h1>
    );
  }
}

export default Overlay;

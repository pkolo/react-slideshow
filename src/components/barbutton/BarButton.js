import React, { Component } from 'react';
import './BarButton.css';

class BarButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.onSelect(this.props.name)
  }


  render(props) {
    return (
      <div>
        <h1 className={this.props.style} onClick={this.handleClick}>{this.props.name}</h1>
      </div>
    );
  }
}

export default BarButton;

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

class Slider extends Component {
  state = {
    drag: false,
  }

  static defaultProps = {
    height: 15,
    max: 100,
    classBack: 'default-slider ',
    classFront: 'default-slider-inner'
  }

  calcWidth = (client, cursor, max) => {
    let width = parseInt(client - cursor);
    if (width >= max) return max;
    if (width <= 0) return 0;
    return width;
  };

  calcValue = (currentWidth, totalWidth) => {
    return parseInt(currentWidth / totalWidth * this.props.max)
  };

  updateValue = (e) => {
    let currentWidth = this.calcWidth(e.clientX, e.target.offsetLeft, this.props.width);
    let value = this.calcValue(currentWidth, this.props.width);
    this.props.onValueChange(value)
  }

  onMouseUp = () => {
    if (this.state.drag) this.setState({ drag: false });
  }

  onMouseDown = (e) => {
    this.updateValue(e);
    this.setState({drag: true});
  }

  onMouseMove = (e) => {
    if (!this.state.drag) return;
    this.updateValue(e);
  }

  valueToWidth = () => {
    return parseInt((this.props.value / this.props.max) * this.props.width) || 0
  }

  render() {

    let backStyle = Object.assign({
      width: this.props.width,
      height: this.props.height,
    });

    let frontStyle = Object.assign({
      width: this.valueToWidth(),
      height: '100%',
      zIndex: '4000',
      top: '0',
      left: '0',
    });

    return (
      <div className={"slider-wrapper"}>
        <div
          className={this.props.classBack}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseUp}
          style={backStyle}
        >
          <div
            className={this.props.classFront}
            style={frontStyle}
          />
        </div>
      </div>
    );
  }
}

export default Slider;

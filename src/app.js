import React, { Component } from 'react';
import Slider from './components/slider.js';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.timerId = setInterval( () =>
      this.setState({
        value1: this.state.value1+5,
      }), 100)
  }

  state = {
    value1: 0,
    duration1: 500,
    value2: 50,
    value3: 0,
  }

  onValue1Change = (value) => {
    this.setState({
      value1: value
    })
  }

  onValue2Change = (value) => {
    this.setState({
      value2: value
    })
  }

  onValue3Change = (value) => {
    this.setState({
      value3: value
    })
  }

  render() {
    if (this.state.value1 > 400) {
      clearInterval(this.timerId)
    }
    return (
      <div>
        <div className="slider">
          <Slider
            width = {500}
            height = {20}
            value = {this.state.value1}
            max = {this.state.duration1}
            onValueChange = {this.onValue1Change}
            classBack='music-slider'
            classFront='music-slider-inner'
          />
        </div>
        <div className='slider'>
          <Slider
            width = {500}
            height = {20}
            value = {this.state.value2}
            onValueChange = {this.onValue2Change}
            classBack='volume-slider'
            classFront='volume-slider-inner'
          />
        </div>
        <div className='slider'>
          <Slider
            width = {500}
            height = {20}
            value = {this.state.value3}
            onValueChange = {this.onValue3Change}
          />
        </div>
      </div>
    );
  }
}

export default App;

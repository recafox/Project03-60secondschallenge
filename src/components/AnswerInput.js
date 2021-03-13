import React, { Component } from 'react';
import './answerinput.css';

class AnswerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isMounted: false,
      timerID: 0,
    }
  }
  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }
  componentWillUnmount() {
    if (this.timerID !== 0) {
      window.clearTimeout(this.state.timerID);
      this.setState({
        timerID: 0
      })
    }
  }
  submit = (event) => {
    const that = this;
    if (event.charCode === 13) {
      this.props.submitAnswer(this.state.value);
      that.setState({
        timerID:  window.setTimeout(function() {
          that.clear();
        }, 200)
      })
    }
  }
  clear = () => {
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <div className="answer-input">
        <input
          value={this.state.value}
          className="input"
          onInput={(e) => {this.setState({value: e.target.value})}} 
          onKeyPress={(e) => {this.submit(e)}}
        ></input>
        <p>press enter to answer</p>
      </div>
    )
  }
}

export default AnswerInput;
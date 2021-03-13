import React from 'react';
import AnswerInput from './AnswerInput';
import './questionboard.css';
class Questionboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ['+', '-', '×'],
      currentMode: null,
      firstNum: null,
      secondNum: null,
      isMounted: false,
    };
    this.question = React.createRef();
  }
  componentDidMount() {
    this.setState({
      currentMode: this.selectMode(),
      firstNum: this.generateNumber(),
      secondNum: this.generateNumber(),
      isMounted: true,
    });
  }
  startErrorAnime = () => {
    if (this.question.current) {
      this.question.current.classList.add('shaking');
    }
  }
  stopErrorAnime = () => {
    if (this.question.current) {
      this.question.current.classList.remove('shaking');
    }
  }
  reset = () => {
    if (this.props.score > 10) {
      this.props.levelUp();
    }
    let newQuestion = {
      currentMode: this.selectMode(),
      firstNum: this.generateNumber(),
      secondNum: this.generateNumber(),
    };
    this.setState({
      currentMode: newQuestion.currentMode,
      firstNum: newQuestion.firstNum,
      secondNum: newQuestion.secondNum
    });
  }
  checkAnswer = (userInput) => {
    const that = this;
    let answer = that.calculateAnswer();
    if (answer === parseInt(userInput, 10)) {
      that.props.onAnswerCorrect();
    } else {
      that.startErrorAnime();
      that.props.onAnswerWrong();
    }
    that.setState({
      timerID:  window.setTimeout(function() {
        that.stopErrorAnime();
        that.reset();
      }, 200)
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
  createRandomNumber = (digit = 1) => {
    return parseInt(Math.random() * Math.pow(10, digit), 10);
  }
  generateNumber = () => {
    return this.createRandomNumber(this.props.level);
  }
  selectMode = () => {
    let random = parseInt(Math.random() * 3, 10);
    return this.state.mode[random];
  }
  calculateAnswer = () => {
    let { firstNum, secondNum, currentMode } = this.state;
    if (currentMode) {
      switch(currentMode) {
        case '+':
          return firstNum + secondNum;
          
        case '-':
          return firstNum - secondNum;
          
        case '×':
          return firstNum * secondNum;
          
        default:
          break;
      }
    }
  }
  
  render() {
    let { firstNum, secondNum, currentMode } = this.state;
    if (typeof firstNum !== 'undefined') {
      return (
        <div className="question-board">
          <div className="question" ref={this.question}>
            <div className="question__num">
              {firstNum}
            </div>
            <div className="question__sign">
              {currentMode}
            </div>
            <div className="question__num">
              {secondNum}
            </div>
            <div className="question__sign">
              =
            </div>
          </div>
          <AnswerInput submitAnswer={this.checkAnswer}></AnswerInput>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
    
  }
}

export default Questionboard;
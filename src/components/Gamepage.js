import React from 'react';
import Scoreboard from './Scoreboard';
import Countdown from './Countdown';
import Questionboard from './Questionboard';
import './gamepage.css';

class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    let correctSound = new Audio();
    correctSound.src = '/sounds/correct.wav';
    let errorSound = new Audio();
    errorSound.src = '/sounds/error.wav';
    this.state = {
      correctSound,
      errorSound
    }
    
  }

  playCorrectSound = () => {
    this.state.correctSound.play();
  }

  playErrorSound = () => {
    this.state.errorSound.play();
  }

  onAnswerCorrect = () => {
    // add score this.props.addScore
    this.playCorrectSound();
    this.props.addScore();
  }

  onAnswerWrong = () => {
    // minus score this.props.minusScore
    this.playErrorSound();
    this.props.minusScore();
  }

  onCountdownOver = () => {
    this.props.changeGameStatus('end');
  }
  render() {
    return (
      <div className="page-container page--game">
        <div className="page__upper">
          <Scoreboard score={this.props.score}></Scoreboard>
          <Countdown onCountdownOver={this.onCountdownOver}></Countdown>
        </div>
        <div className="page__bottom">
          <Questionboard
            levelUp={this.props.levelUp}
            level={this.props.level}
            score={this.props.score}
            onAnswerCorrect={this.onAnswerCorrect}
            onAnswerWrong={this.onAnswerWrong}>
          </Questionboard>
        </div>

      </div>
    )
  }
}

export default Gamepage;
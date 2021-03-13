import './endpage.css';
import React from 'react';
import Button from './Button';

class Endpage extends React.Component {
  onButtonClick = () => {
    this.props.changeGameStatus('start');
  }

  componentDidMount() {
    let { score } = this.props;
    let sound = new Audio();
    if (score < 50) {
      sound.src = '/sounds/fail.mp3';
    } else {
      sound.src = '/sounds/crowd-cheer.wav';
    }
    sound.play();
  }


  render() {
    return (
      <div className="page-container page--end">
        <div className="logo">
          60 SECONDS CHALLENGE
        </div>
        <div className="score-board">
          <div className="line"></div>
          <p>YOUR FINAL SCORE</p>
          <div className="line"></div>
        </div>
        <div className="score">
          {this.props.score}
        </div>
        <Button text="TRY AGAIN!" onClick={this.onButtonClick}></Button>
      </div>
    )
  }
}

export default Endpage;
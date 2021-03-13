import React from 'react';
import './scoreboard.css';

const Scoreboard = (props) => {
  
  const handleScore = (score, length) => {
    let decimal = score / Math.pow(10, length - 1);
    decimal = decimal.toFixed(length - 1) + "";
    return decimal.replace('.', '');
  }

  return (
    <div className="scoreboard">
      <div className="scoreboard__logo">
        60 SECONDS CHALLENGE
      </div>
      <div className="scoreboard__score">
        <div className="score__txt">
          SCORE
        </div>
        <div className="score__num">
          {handleScore(props.score, 3)}
        </div>
      </div>
    </div>
  )
}

export default Scoreboard;
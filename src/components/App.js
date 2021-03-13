import './style.css';
import React from 'react';
import Startpage from './Startpage';
import Gamepage from './Gamepage';
import Endpage from './Endpage';

class App extends React.Component {
  state = {
    gameStatus: 'start', // going, end
    score: 0,
    level: 1,
  }

  resetGame = () => {
    this.setState({
      score: 0,
      level: 1
    })
  }

  levelUp = () => {
    let newLevel = this.state.level + 1;
    this.setState({
      level: newLevel
    });
  }

  addScore = () => {
    let { score } = this.state;
    this.setState({ score: score += 5});
  }
  minusScore = () => {
    let { score } = this.state;
    let newScore = score - 3;
    if (newScore <= 0) {
      this.setState({
        score: 0
      });
    } else {
      this.setState({
        score: newScore
      });
    }
  }


  renderPage() {
    switch(this.state.gameStatus) {
      case 'start':
        if (this.state.score > 0) {
          this.resetGame();
        }
        return (
          <Startpage changeGameStatus={this.changeGameStatus}></Startpage>
        );
      case 'going':
        return (
            <Gamepage 
                changeGameStatus={this.changeGameStatus}
                level={this.state.level}
                levelUp={this.levelUp}
                score={this.state.score}
                addScore={this.addScore}
                minusScore={this.minusScore}
            >
            </Gamepage>
        );
      case 'end':
        return (
            <Endpage 
              changeGameStatus={this.changeGameStatus}
              score={this.state.score}>
            </Endpage>
        );
      default:
        return;
    }
  }

  changeGameStatus = (status) => {
    this.setState({
      gameStatus: status,
    })
  };

  render () {
    return (
      <div>
        {this.renderPage()}
      </div>
    )

  }
}

export default App;
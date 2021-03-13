import React from 'react';
import Title from './Title';
import Button from './Button';
class Startpage extends React.Component {
  onButtonClick = () => {
    this.props.changeGameStatus('going');
  }

  render() {
    return (
      <div className="page-container page--start">
        <Title></Title>
        <Button text="START!" subText="try to answer more as you can" onClick={this.onButtonClick}></Button>
      </div>
    )
  }
}

export default Startpage;
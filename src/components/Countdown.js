import React from 'react';
import './countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    let sound = new Audio();
    sound.src = '/sounds/tick.wav';
    this.state = {
      remaining: 10,
      timerId: null,
      sound,
    }
  }
  ticking = () => {
    const that = this;
    // 校正
    window.setTimeout(function() {
      that.state.sound.play();
    }, 100);
    
  }
  start = () => {
    const that = this;
    let id = window.setInterval(function() {
      that.ticking();
      let remain = that.state.remaining - 1;
      that.setState({
        remaining: remain
      });
      if (that.state.remaining <= 0) {
        window.clearInterval(id);
        window.setTimeout(function() {
          that.props.onCountdownOver();
        }, 1000);
      }
    }, 1000);
    
  }
  componentDidMount() {
    this.start();
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    return (
      <div className="countdown">
        {`00:${this.state.remaining < 10 ? '0'+this.state.remaining : this.state.remaining}`}
      </div>
    )
  }
}

export default Countdown;
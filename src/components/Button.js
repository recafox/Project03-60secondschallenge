import './button.css';
import React from 'react';

const Button = (props) => {

  if (props.subText) {
    return (
      <div className="button-set">
        <button className="button" onClick={props.onClick}>
          {props.text}
        </button>
        <p>
          {props.subText}
        </p>
      </div>
    )
  }
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button;
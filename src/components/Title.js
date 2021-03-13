import React from 'react';
import './title.css';

const Title = (props) => {
  return (
    <div className="title-container">
      <div className="title__left">
        60
      </div>
      <div className="title__right">
        <div className="right__upper">
          <div className="upper__group">
            SECONDS
          </div>
          <div className="sign-box">
            <div>
              +−×÷
            </div>
          </div>
        </div>
        <div className="right__bottom">
          CHALLENGE
        </div>
      </div>
    </div>
  )
}

export default Title;
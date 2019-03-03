import React from 'react';
import Countdown from 'react-countdown-now';
import './CountdownTimer.css';
 

const countdownTimer = (props) => (
  <div className="countdownTimer">
    Auksjonen avsluttes om: 
  <Countdown date={Date.now() + props.auctionTime} />
  </div>);
 
export default countdownTimer;
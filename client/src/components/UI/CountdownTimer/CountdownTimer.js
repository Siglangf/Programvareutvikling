import React from 'react';
import Countdown from 'react-countdown-now';
import './CountdownTimer.css';
 
// Random component
const completionist = () => <span style={{color: 'red'}}>Auksjonen er avsluttet!</span>;

const countdownTimer = (props) => (
  <div className="countdownTimer">
    Auksjonen avsluttes om: 
  <Countdown date={Date.now() + props.auctionTime}>
    <completionist />
  </Countdown>
  </div>);
 
export default countdownTimer;
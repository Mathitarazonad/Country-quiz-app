import React from 'react';
import gameImage from '../images/human.svg';

export default function Menu() {
  return (
    <div className='main-menu'>
      <h1>Country Quiz</h1>
      <img src={gameImage} alt='gameImage' className='menu-img'/>
      <h2>Actual Record: 10</h2>
      <button className='play-btn'>Play</button>
    </div>
  )
}

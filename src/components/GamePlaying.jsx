import React from 'react';
import Options from './Options';
import gameImage from '../images/human.svg';

export default function GamePlaying() {
  return (
    <div className='game-container'>
      <img src={gameImage} alt='gameImg' />
      <p>Asuncion is the capital of</p>
      <Options />
    </div>
  )
}

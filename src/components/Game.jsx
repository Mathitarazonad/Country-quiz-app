import React from 'react';
import Streaks from './Streaks';
import GamePlaying from './GamePlaying';

export default function Game() {
  return (
    <div className='game'>
      <h2>Country Quiz</h2>
      <GamePlaying />
      <Streaks />
    </div>
  )
}

import React from 'react';
import { useSelector } from 'react-redux';

export default function BestStreak() {
  const {bestStreak, currentStreak} = useSelector(store => store.game); 

  return (
    <div className='best-streak-container'>
      <h3>Current Streak: <b className='current-streak'>{currentStreak}</b></h3>
      <h3>Your Best Streak is: <b className='best-streak'>{bestStreak}</b></h3>
    </div>
  )
}

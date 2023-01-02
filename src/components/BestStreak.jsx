import React from 'react';
import { useSelector } from 'react-redux';

export default function BestStreak() {
  const {bestStreak} = useSelector(store => store.game); 

  return (
    <div className='best-streak-container'>
      <h3>Your Best Streak is: <b className='best-streak'>{bestStreak}</b></h3>
    </div>
  )
}

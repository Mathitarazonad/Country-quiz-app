import React from 'react';
import gameImage from '../images/human.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setIfIsPlaying } from '../store/gameSlice';
import nextMp3 from '../sounds/next.mp3';

export default function Menu() {
  const dispatch = useDispatch()
  const bestStreak = useSelector(store => store.game.bestStreak);
  
  const handlePlay = () => {
    dispatch(setIfIsPlaying());
    new Audio(nextMp3).play();
  }

  return (
    <div className='main-menu'>
      <h1>Country Quiz</h1>
      <img src={gameImage} alt='gameImage' className='menu-img'/>
      <h2>Actual Record: {bestStreak}</h2>
      <button className='play-btn' onClick={() => handlePlay()}>Play</button>
    </div>
  )
}

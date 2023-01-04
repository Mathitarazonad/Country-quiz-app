import React from 'react';
import Options from './Options';
import gameImage from '../images/human.svg';
import Question from './Question';
import NextButton from './NextButton';
import { useSelector } from 'react-redux';

export default function GamePlaying() {
  const {userHasChosen, currentStreak} = useSelector(store => store.game);

  return (
    <div className='game-container'>
      <img src={gameImage} alt='gameImg' className='quiz-img'/>
      <Question />
      <Options />
      <div className='bottom-section'>
        <p className='current-streak'>Streak: {currentStreak}</p>
        {userHasChosen && <NextButton />}
      </div>
    </div>
  )
}

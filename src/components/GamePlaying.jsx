import React from 'react';
import Options from './Options';
import gameImage from '../images/human.svg';
import Question from './Question';
import NextButton from './NextButton';
import { useSelector } from 'react-redux';

export default function GamePlaying() {
  const {userHasChosen} = useSelector(store => store.game);

  return (
    <div className='game-container'>
      <img src={gameImage} alt='gameImg' className='quiz-img'/>
      <Question />
      <Options />
      {userHasChosen && <NextButton />}
    </div>
  )
}

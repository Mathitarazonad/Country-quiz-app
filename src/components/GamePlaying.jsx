import React, { useEffect } from 'react';
import Options from './Options';
import gameImage from '../images/human.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setIfUserHasChosen, setQuiz } from '../store/gameSlice';
import { getQuizSetup } from '../functions';
import Question from './Question';

export default function GamePlaying() {
  const dispatch = useDispatch();
  const {userHasChosen, allCountries} = useSelector(store => store.game);

  const handleNext = () => {
    dispatch(setIfUserHasChosen());
    const {reference, answer, options, questionOption: question} = getQuizSetup(allCountries);
    dispatch(setQuiz({reference, answer, options, question}));
  }

  return (
    <div className='game-container'>
      <img src={gameImage} alt='gameImg' className='quiz-img'/>
      <Question />
      <Options />
      {userHasChosen && <button className='next-btn' onClick={() => handleNext()}>Next</button>}
    </div>
  )
}

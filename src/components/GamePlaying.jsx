import React, { useEffect } from 'react';
import Options from './Options';
import gameImage from '../images/human.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setChoices, setIfIsWinning, setIfUserHasChosen, setQuiz, setStop } from '../store/gameSlice';
import { getQuizSetup } from '../functions';
import Question from './Question';

export default function GamePlaying() {
  const dispatch = useDispatch();
  const {userHasChosen, allCountries, stop} = useSelector(store => store.game);

  const handleNext = () => {
    dispatch(setIfUserHasChosen());
    dispatch(setChoices({correct:undefined, incorrect:undefined}));
    const {reference, answer, options, questionOption: question} = getQuizSetup(allCountries);
    dispatch(setQuiz({reference, answer, options, question}));
    if (stop) {
      dispatch(setIfIsWinning(false));
      dispatch(setStop());
    }
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

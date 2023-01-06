import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIfUserHasChosen, setChoices, setQuiz, setIfIsWinning, setStop, setTimeOut } from '../store/gameSlice';
import { getQuizSetup } from '../functions';
import nextMp3 from '../sounds/next.mp3';
import resultsMp3 from '../sounds/result.mp3';

export default function NextButton() {
  const dispatch = useDispatch();
  const {allCountries, stop} = useSelector(store => store.game);

  const handleNext = () => {
    dispatch(setIfUserHasChosen());
    dispatch(setChoices({correct:undefined, incorrect:undefined}));
    const {reference, answer, options, questionOption: question} = getQuizSetup(allCountries);
    dispatch(setQuiz({reference, answer, options, question}));
    dispatch(setTimeOut(10));

    if (stop) {
      dispatch(setIfIsWinning(false));
      dispatch(setStop());
      new Audio(resultsMp3).play();  
    } else {
      new Audio(nextMp3).play();
    }
  }

  return (
    <div className='next-btn-container'>
      <button className='next-btn' onClick={() => handleNext()}>Next</button>
    </div>
  )
}

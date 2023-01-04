import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIfUserHasChosen, setChoices, setQuiz, setIfIsWinning, setStop } from '../store/gameSlice';
import { getQuizSetup } from '../functions';

export default function NextButton() {
  const dispatch = useDispatch();
  const {allCountries, stop} = useSelector(store => store.game);

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
    <div className='next-btn-container'>
      <button className='next-btn' onClick={() => handleNext()}>Next</button>
    </div>
  )
}

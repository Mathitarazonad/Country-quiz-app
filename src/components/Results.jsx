import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizSetup } from '../functions';
import ResultsImg from '../images/winners.svg';
import { setCurrentStreak, setIfIsWinning } from '../store/gameSlice';
import { setQuiz } from '../store/gameSlice';

export default function Results() {
  const dispatch = useDispatch()
  const {currentStreak, allCountries} = useSelector(store => store.game);
  
  const handleReset = () => {
    dispatch(setCurrentStreak(0));
    dispatch(setIfIsWinning(true));
    const {reference, answer, options, questionOption: question} = getQuizSetup(allCountries);
    dispatch(setQuiz({reference, answer, options, question}));
  }

  return (
    <div className='results-container'>
      <img src={ResultsImg} alt='winnerImg' className='results-img'/>
      <h3>Results</h3>
      <p className='results-text'>You got <b className='result'>{currentStreak}</b> correct answers!</p>
      <button className='try-again-btn' onClick={() => handleReset()}>Try Again</button>
    </div>
  )
}

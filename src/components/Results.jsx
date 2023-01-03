import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResultsImg from '../images/winners.svg';
import { setCurrentStreak, setIfIsWinning } from '../store/gameSlice';

export default function Results() {
  const dispatch = useDispatch()
  const {currentStreak} = useSelector(store => store.game);
  
  const handleReset = () => {
    dispatch(setCurrentStreak(0));
    dispatch(setIfIsWinning(true));
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

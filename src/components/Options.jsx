import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentStreak, setIfIsWinning, setIfUserHasChosen } from '../store/gameSlice';

export default function Options() {
  const dispatch = useDispatch();
  const {currentStreak} = useSelector(store => store.game)
  const {options, answer} = useSelector(store => store.game.quiz);

  const handleOption = option => {
    if (answer === option) {
      dispatch(setCurrentStreak(currentStreak + 1));
      dispatch(setIfUserHasChosen());
    } else {
      dispatch(setIfIsWinning(false));
    }
  }

  return (
    <div className='options-container'>
      <button className='option' onClick={() => handleOption(options[0])}><p>A</p>{options[0]}</button>
      <button className='option' onClick={() => handleOption(options[1])}><p>B</p>{options[1]}</button>
      <button className='option' onClick={() => handleOption(options[2])}><p>C</p>{options[2]}</button>
      <button className='option' onClick={() => handleOption(options[3])}><p>D</p>{options[3]}</button>
    </div>
  )
}

import React from 'react';
import Streaks from './Streaks';
import GamePlaying from './GamePlaying';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuiz } from '../store/gameSlice';
import { getQuizSetup } from '../functions';

export default function Game() {
  const dispatch = useDispatch();
  const {allCountries} = useSelector(store => store.game);

  useEffect(() => {
    const {reference, answer, options, questionOption: question} = getQuizSetup(allCountries);
    dispatch(setQuiz({reference, answer, options, question}));
  }, []);

  return (
    <div className='game'>
      <h2>Country Quiz</h2>
      <GamePlaying />
      <Streaks />
    </div>
  )
}

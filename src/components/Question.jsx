import React from 'react';
import { useSelector } from 'react-redux';
import { getQuestion } from '../functions';

export default function Question() {
  const {question, reference} = useSelector(store => store.game.quiz);

  return (
    <div className='question-container'>
      {getQuestion(question, reference)}
    </div>
  )
}

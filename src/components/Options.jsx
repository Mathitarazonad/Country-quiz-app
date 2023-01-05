import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAnswerIcon, getClassName } from '../functions';
import { setCurrentStreak, setIfUserHasChosen, setStop, setBestStreak, setChoices } from '../store/gameSlice';
import correctMp3 from '../sounds/correct.mp3';
import incorrectMp3 from '../sounds/wrong.mp3'; 

export default function Options() {
  const dispatch = useDispatch();
  const {currentStreak, userHasChosen, bestStreak} = useSelector(store => store.game)
  const {options, answer} = useSelector(store => store.game.quiz);
  const {correct, incorrect} = useSelector(store => store.game.choices);

  const handleOption = (option, index) => {
    if (answer === option && !userHasChosen) {
      dispatch(setCurrentStreak(currentStreak + 1));
      dispatch(setIfUserHasChosen());
      dispatch(setChoices({correct: index, incorrect}));
      new Audio(correctMp3).play();

      if (bestStreak < currentStreak + 1) {
        dispatch(setBestStreak(currentStreak + 1));
      }
    } else if(answer !== option && !userHasChosen) {
      dispatch(setIfUserHasChosen());
      dispatch(setStop());
      dispatch(setChoices({correct: options.indexOf(answer), incorrect: index}))
      new Audio(incorrectMp3).play();
    }
  }

  return (
    <div className='options-container'>
      <div className={getClassName(correct, incorrect, 0)} onClick={() => handleOption(options[0], 0)}>
        <p className='option-letter'>A</p>
        <p className='option-text'>{options[0]}</p>
        <div className='answer-icon-container'>{getAnswerIcon(correct, incorrect, 0)}</div>
      </div>
      <div className={getClassName(correct, incorrect, 1)} onClick={() => handleOption(options[1], 1)}>
        <p className='option-letter'>B</p>
        <p className='option-text'>{options[1]}</p>
        <div className='answer-icon-container'>{getAnswerIcon(correct, incorrect, 1)}</div>
      </div>
      <div className={getClassName(correct, incorrect, 2)} onClick={() => handleOption(options[2], 2)}>
        <p className='option-letter'>C</p>
        <p className='option-text'>{options[2]}</p>
        <div className='answer-icon-container'>{getAnswerIcon(correct, incorrect, 2)}</div>
      </div>
      <div className={getClassName(correct, incorrect, 3)} onClick={() => handleOption(options[3], 3)}>
        <p className='option-letter'>D</p>
        <p className='option-text'>{options[3]}</p>
        <div className='answer-icon-container'>{getAnswerIcon(correct, incorrect, 3)}</div>
      </div>
    </div>
  )
}

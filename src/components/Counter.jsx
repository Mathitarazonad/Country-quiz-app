import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIfUserHasChosen, setStop, setTimeOut, setChoices } from '../store/gameSlice';
import incorrectMp3 from '../sounds/wrong.mp3';

export default function Counter() {
  const dispatch = useDispatch();
  const {userHasChosen, timeOut} = useSelector(store => store.game);
  const {answer, options} = useSelector(store => store.game.quiz)

  useEffect(() => {
    if (timeOut !== 0 && !userHasChosen) {
      const interval = setInterval(() => {
      dispatch(setTimeOut(timeOut - 1));
    }, 1000);

    return () => clearInterval(interval);
    }
    else if (timeOut === 0 && !userHasChosen){
      dispatch(setIfUserHasChosen());
      dispatch(setStop());
      dispatch(setChoices({correct: options.indexOf(answer), incorrect: undefined}))
      new Audio(incorrectMp3).play();
    }
  }, [timeOut])

  return (
    <div className='counter-container'>
      <div className='counter' style={{background:`conic-gradient(#fba51a ${(10-timeOut)*36}deg, rgba(128, 128, 128, 0.274) 0deg)`}}>
        <p>{timeOut}</p>
        <span className='counter-loading-circle'></span>
      </div>
    </div>
  )
}

//rgba(128, 128, 128, 0.274), 0deg)

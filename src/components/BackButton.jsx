import React, { useEffect, useState } from 'react';
import {ImArrowLeft} from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { setIfIsPlaying } from '../store/gameSlice';
import backMp3 from '../sounds/back.mp3';
import invalidMp3 from '../sounds/denie-96177.mp3';

export default function BackButton() {
  const dispatch = useDispatch();
  const {userHasChosen, isWinning} = useSelector(store => store.game);
  const [invalidBtn, setInvalidBtn] = useState(false);

  const handleBack = () => {
    if (userHasChosen || !isWinning) { 
      dispatch(setIfIsPlaying());
      new Audio(backMp3).play();
    } else {
      new Audio(invalidMp3).play();
      setInvalidBtn(true);
    }
  }

  useEffect(() => {
    if (invalidBtn) {
      setTimeout(() => setInvalidBtn(false), 1000)
    }
  })

  return (
      <ImArrowLeft className='back-btn' onClick={() => handleBack()} style={invalidBtn && {animation: 'shuffle .5s linear both'}}/>
  )
}

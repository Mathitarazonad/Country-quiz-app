import React from 'react';
import {ImArrowLeft} from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { setIfIsPlaying } from '../store/gameSlice';
import backMp3 from '../sounds/back.mp3';

export default function BackButton() {
  const dispatch = useDispatch();
  const {userHasChosen} = useSelector(store => store.game);

  const handleBack = () => {
    if (userHasChosen) { 
      dispatch(setIfIsPlaying());
      new Audio(backMp3).play();
    }
  }

  return (
      <ImArrowLeft className='back-btn' onClick={() => handleBack()}/>
  )
}

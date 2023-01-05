import React from 'react';
import {ImArrowLeft} from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { setIfIsPlaying } from '../store/gameSlice';

export default function BackButton() {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setIfIsPlaying());
  }

  return (
      <ImArrowLeft className='back-btn' onClick={() => handleBack()}/>
  )
}

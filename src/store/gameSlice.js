import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying : false,
  currentStreak: 0,
  bestStreak: 0,
  isWinning: true,
  userHasChosen: false,
  quiz: {
    question: 0,
    answer: '',
    options: [],
  }
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers : {
    setIfIsPlaying: state => {
      state.isPlaying = !state.isPlaying;
    },
    setCurrentStreak: (state, action) => {
      state.currentStreak = action.payload;
    },
    setBestStreak: (state, action) => {
      state.bestStreak = action.payload;
    },
    setIfIsWinning: (state, action) => {
      state.isWinning = action.payload;
    },
    setIfUserHasChosen: state => {
      state.userHasChosen = !state.userHasChosen;
    },
    setQuiz: (state, action) => {
      const [question, answer, options] = action.payload;
      state.quiz = {question, answer, options}; 
    },
  }
});

export default gameSlice.reducer;
export const {setIfIsPlaying, setCurrentStreak, setBestStreak, setIfIsWinning, setIfUserHasChosen, setQuiz} = gameSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying : false,
  currentStreak: 0,
  bestStreak: 0,
  isWinning: true,
  userHasChosen: false,
  quiz: {
    question: 0,
    reference: '',
    answer: '',
    options: [],
  },
  allCountries: [],
  stop: false,
  choices: {
    correct: undefined,
    incorrect: undefined,
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
      const {reference, question, answer, options} = action.payload;
      state.quiz = {reference, question, answer, options}; 
    },
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setStop: state => {
      state.stop = !state.stop;
    },
    setChoices: (state, action) => {
      state.choices = action.payload
    }
  }
});

export default gameSlice.reducer;
export const {setIfIsPlaying, setCurrentStreak, setBestStreak, setIfIsWinning, setIfUserHasChosen, setQuiz, setAllCountries, setStop, setChoices} = gameSlice.actions;
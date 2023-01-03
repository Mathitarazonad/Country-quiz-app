import Game from './components/Game';
import Menu from './components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAllCountries } from './store/gameSlice';

function App() {
  const isPlaying = useSelector(store => store.game.isPlaying);
  const dispatch = useDispatch()

  useEffect(() => {
    const data = fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => dispatch(setAllCountries(res)))
  }, [])

  return (
    <div className='App'>
      {isPlaying ? <Game /> : <Menu />}
      <footer>
        Challenge by <a href='https://devchallenges.io/challenges/Bu3G2irnaXmfwQ8sZkw8#' target='_blank' rel='noopener noreferrer' >DevChallenges</a>. Coded by <a href='https://github.com/Mathitarazonad' target='_blank' rel='noopener noreferrer' >Mathías Tarazona</a>.
      </footer>
    </div>
  )
}

export default App

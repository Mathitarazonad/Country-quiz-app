import Game from './components/Game';
import Menu from './components/Menu';
import { useSelector } from 'react-redux';

function App() {
  const isPlaying = useSelector(store => store.game.isPlaying);
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

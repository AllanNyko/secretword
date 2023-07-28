import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';
import './App.css';
import StartScreen from './components/StartScreen'

function App() {
  const stages = [{ id: 1, name: 'start' }, { id: 2, name: 'game' }, { id: 3, name: 'end' }];
  const [gameStage, setGameStage] = useState(stages[0].name);
const [words] = useState(wordsList);
console.log(words)



  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen /> }
      {gameStage === 'game' && <StartScreen /> }
      {gameStage === 'end' && <StartScreen /> }
      
    </div>
  );
}

export default App;

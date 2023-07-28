import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';
import './App.css';

import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const App = () => {
  const stages = [{ id: 1, name: 'start' }, { id: 2, name: 'game' }, { id: 3, name: 'end' }];
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickeCategory] = useState();
  const [letters, setLetters] = useState();

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  } 


  const startGame = () => {

    const { word, category } = pickWordAndCategory()

    let letters = word.toLowerCase().split('');
    console.log(letters);

    setLetters(letters);
    setPickeCategory(category);
    setPickedWord(word)

    setGameStage(stages[1].name)
  }

  const verifyLetters = () => { setGameStage(stages[2].name) }
  const retry = () => { setGameStage(stages[0].name) }




  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetters={verifyLetters} />}
      {gameStage === 'end' && <GameOver retry={retry} />}

    </div>
  );
}

export default App;

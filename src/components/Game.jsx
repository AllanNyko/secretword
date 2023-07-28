
import React, { useState, useRef } from 'react';
import './Game.css'

const Game = ({ verifyLetters, wrongLetters,
	pickedCategory, guessedLetters, guesses,
	letters, pickedWord, score }) => {
	const letterIputRef = useRef(null)
	const [letter, setLetter] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		verifyLetters(letter)
		setLetter('')
		letterIputRef.current.focus()
	}


	return (

		<div className="name">
			<p className="points"><span>Pontuação: {score}</span>	</p>
			<h1>Adivinhe a palavra</h1>
			<h3 className="tip"> Dica sobre a palavra: <span>Dica: {pickedCategory.toUpperCase()}</span>
			</h3>
			<p>Você ainda tem {guesses} tentativas.</p>
			<div className="wordContainer">
				{
					letters.map((l, i) => guessedLetters.includes(l) ?
						<span key={i} className="letter">{l}</span> : <span key={i} className="blankSquare"></span>)
				}

			</div>
			<div className="letterContainer">
				<p>Tente advinhar uma a letra da palavra</p>
				<form onSubmit={handleSubmit}>
					<input type="text" name="letter" maxLength={1}
						onChange={(e) => setLetter(e.target.value)} 
						value={letter} required ref={letterIputRef} />
					<button onClick={console.log()}>Jogar</button>

				</form>
			</div>
			<div className="wrongLettersContainer">
				<p>Letras já utilizadas</p>
				{
					wrongLetters.map((l, i) => <span key={i} >{l}</span>)
				}
			</div>
			<button onClick={verifyLetters}>Desistir do Game</button>
		</div>

	);
};

export default Game;
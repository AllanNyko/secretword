
import React from 'react';
import './Game.css'

const Game = ({ verifyLetters }) => {
	return (

		<div className="name">
			<p className="points"><span>Pontuação: </span>	</p>
			<h1>Adivinhe a palavra</h1>
			<h3 className="tip"> Dica sobre a palavra: <span>Dica: ...</span>
			</h3>
			<div className="wordContainer">
				<span className="letter">
					A
				</span>
				<span className="blankSquare">

				</span>
			</div>
			<div className="letterContainer">
				<p>Tente Advinhar a letra</p>
				<form >
					<input type="text" name="letter" maxLength={1} required />
					<button onClick={''}>Jogar</button>

				</form>
			</div>
			<div className="wrongLettersContainer">
				<p>Letras já utilizadas</p>
				<span>a,</span>
				<span>b,</span>
			</div>
			<button onClick={verifyLetters}>Desistir do Game</button>
		</div>

	);
};

export default Game;
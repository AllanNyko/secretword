import React from 'react';

const StartScreen = ({ startGame }) => {
	return (
		<div>
			<h1>Secret Word</h1>
			<p>Clique no botão para começar a jogar</p>
			<button onClick={startGame}>Começar o Game</button>
		</div>
	);
};

export default StartScreen;
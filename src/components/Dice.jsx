import React, { useState } from 'react'
import diceOne from '../media/dices/die-1.svg'
import diceTwo from '../media/dices/die-2.svg'
import diceThree from '../media/dices/die-3.svg'
import diceFour from '../media/dices/die-4.svg'
import diceFive from '../media/dices/die-5.svg'
import diceSix from '../media/dices/die-6.svg'
import { useMovementFunctionality } from './Movement_Of_Piece_Functionality';

function Dice() {
	const [numberOnDices, setNumberOnDices] = useState([6, 6]);
	const [beat, setBeat] = useState(true);
	const [countOfConsecutive, setCountOfConsecutive] = useState(0);
	const [moveTheCurrentPiece] = useMovementFunctionality({ setBeat, setNumberOnDices, numberOnDices, countOfConsecutive, setCountOfConsecutive });

	const diceIcons = [
		null, // for 1-based indexing
		diceOne,
		diceTwo,
		diceThree,
		diceFour,
		diceFive,
		diceSix
	];

	const handleClick = () => {
		moveTheCurrentPiece();
	}

	return (
		<div className="flex justify-center my-2">
			<div className='flex' onClick={beat ? handleClick : () => { }}>
				<div key={0}><img src={diceIcons[numberOnDices[0]]} alt="" /></div>
				<div key={1}><img src={diceIcons[numberOnDices[1]]} alt="" /></div>
			</div>
		</div>
	)
}
// https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
export default Dice;
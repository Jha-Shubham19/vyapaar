import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

function Dice() {
	const [numberOnDices, setNumberOnDices] = useState([4, 3]);
	const [beat, setBeat] = useState(true);

	const diceIcons = [
		null, // for 1-based indexing
		faDiceOne,
		faDiceTwo,
		faDiceThree,
		faDiceFour,
		faDiceFive,
		faDiceSix
	];
	const getRandomDiceNumber = () => Math.floor(Math.random() * 5) + 1;
	
	const handleClick = () => {

		setBeat(prev => !prev);
		const interval = setInterval(() => {
			setNumberOnDices([getRandomDiceNumber(), getRandomDiceNumber()]);
		}, 50);

		setTimeout(() => {
			clearInterval(interval);
			setTimeout(() => setBeat(prev => !prev), 2000);
		}, 500);
	}

	return (
		<div className="flex justify-center my-2">
			<div className='flex' onClick={handleClick}>
				<FontAwesomeIcon key={0} icon={diceIcons[numberOnDices[0]]} beat={beat} className='text-[3rem] m-2' />
				<FontAwesomeIcon key={1} icon={diceIcons[numberOnDices[1]]} beat={beat} className='text-[3rem] m-2' />
			</div>
		</div>
	)
}
// https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
export default Dice;
import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { PlayersContext } from '../context/PlayersContext';
import diceOne from '../media/dices/die-1.svg'
import diceTwo from '../media/dices/die-2.svg'
import diceThree from '../media/dices/die-3.svg'
import diceFour from '../media/dices/die-4.svg'
import diceFive from '../media/dices/die-5.svg'
import diceSix from '../media/dices/die-6.svg'

function Dice() {
	const [numberOnDices, setNumberOnDices] = useState([6, 6]);
	const [beat, setBeat] = useState(true);
	const [isIntervalRunning, setIsIntervalRunning] = useState(false);
	const [totalSumOnDice, setTotalSumOnDice] = useState(-1);
	const { allPlayersData, setAllPlayersData, whosTurn, setWhosTurn } = useContext(PlayersContext);

	useEffect(() => {
		if (!isIntervalRunning && totalSumOnDice != -1) {
			setTotalSumOnDice(numberOnDices[0] + numberOnDices[1]);
		}
	}, [numberOnDices, isIntervalRunning]);
	useEffect(() => {
		if (!isIntervalRunning && totalSumOnDice > 0) {
			
			const timer = setInterval(() => {
				setAllPlayersData(prev => {
					const newValues = prev.map((val, ind) => {
						if(val.currentPosition == 40) val.currentPosition = 0;
						return ind === whosTurn ? { ...val, currentPosition: val.currentPosition + 1 } : val;
					});
					return newValues;
				});

				setTotalSumOnDice(prev => prev - 1); // Decrement remaining total sum
			}, 400);

			return () => {
				clearInterval(timer);
			};
		}
		else if (totalSumOnDice == -1) setTotalSumOnDice(-2);
		else if (totalSumOnDice == 0) {
			setWhosTurn(prev => (prev+1)%(allPlayersData.length));
			setBeat(prev => !prev);
		}

		setIsIntervalRunning(prev => !prev);
	}, [totalSumOnDice]);


	const diceIcons = [
		null, // for 1-based indexing
		diceOne,
		diceTwo,
		diceThree,
		diceFour,
		diceFive,
		diceSix
	];
	const getRandomDiceNumber = () => Math.floor(Math.random() * 5) + 1;

	const handleClick = () => {

		setBeat(prev => !prev);
		setIsIntervalRunning(prev => !prev);
		const interval = setInterval(() => {
			setNumberOnDices([getRandomDiceNumber(), getRandomDiceNumber()]);
		}, 50);

		setTimeout(() => {
			clearInterval(interval);
			
		}, 800);
	}

	return (
		<div className="flex justify-center my-2">
			<div className='flex' onClick={handleClick}>
				<div  key={0}><img src={diceIcons[numberOnDices[0]]} alt="" /></div>
				<div  key={1}><img src={diceIcons[numberOnDices[1]]} alt="" /></div>
				{/* <FontAwesomeIcon key={0} icon={diceIcons[numberOnDices[0]]} beat={beat} className='text-[3rem] m-2 text-slate-100' />
				<FontAwesomeIcon key={1} icon={diceIcons[numberOnDices[1]]} beat={beat} className='text-[3rem] m-2 text-slate-100' /> */}
			</div>
		</div>
	)
}
// https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
export default Dice;
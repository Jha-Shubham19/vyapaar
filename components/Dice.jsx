import React, { useState } from 'react'

function AddDots({ number }) {
	
	const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};
	return (
		<div className="w-[3rem] h-[3rem] mt-4 relative m-1 rounded-xl shadow-md border border-green-800">
			{
				dotPositionMatrix[number].map(([__top, __left], ind) => {
					__top += '%'; __left += '%';
					return <div key={ind} className='w-[0.5rem] h-[0.5rem] bg-black rounded-[50%] absolute' style={{ top: __top, left: __left, transform: `translateX(-${__left}) translateY(-${__top})` }}></div>
				})
			}
		</div>
	);
}
function Dice() {
	const [numberOnDices, setNumberOnDices] = useState([6,6]);
	const getRandomDiceNumber = ()=> Math.floor(Math.random()*5)+1;
	const handleClick = ()=> {
		const interval = setInterval(()=>setNumberOnDices([getRandomDiceNumber(),getRandomDiceNumber()]),50);
		setTimeout(()=>clearInterval(interval),500);
	}
	return (
		<div className="flex justify-center my-2">
			<div className='flex' onClick={handleClick}>
				<AddDots key={0} number={numberOnDices[0]}/>
				<AddDots key={1} number={numberOnDices[1]}/>
			</div>
		</div>
	)
}
// https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
export default Dice;
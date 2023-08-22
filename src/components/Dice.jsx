import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { useMovementFunctionality } from './Movement_Of_Piece_Functionality';

function Dice() {
  const [numberOnDices, setNumberOnDices] = useState([6, 6]);
  const [beat, setBeat] = useState(true);
  const [countOfConsecutive, setCountOfConsecutive] = useState(0);
  const [moveTheCurrentPiece] = useMovementFunctionality({setBeat,setNumberOnDices,numberOnDices,countOfConsecutive,setCountOfConsecutive});
  
  const diceIcons = [
    null, // for 1-based indexing
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix
  ];
  
  const handleClick = () => {
    moveTheCurrentPiece();
  }

  return (
    <div className="flex justify-center my-2">
      <div className='flex' onClick={beat ? handleClick : ()=>{}}>
        <FontAwesomeIcon key={0} icon={diceIcons[numberOnDices[0]]} beat={beat} className='text-[3rem] m-2 text-white' />
        <FontAwesomeIcon key={1} icon={diceIcons[numberOnDices[1]]} beat={beat} className='text-[3rem] m-2 text-white' />
      </div>
    </div>
  )
}
// https://dcode.domenade.com/tutorials/how-to-create-a-dice-roll-game-with-html-css-and-javascript
export default Dice;
import React, { useContext } from 'react'
import { PlayersContext } from '../context/PlayersContext';

export const PackMan = ({ currentPosition, playerNumber , index }) => {

  const { allPlayersData } = useContext(PlayersContext);

  const UserPieceIcon = `/src/media/pacman/body${playerNumber}.svg`

  console.log(currentPosition, typeof (currentPosition));

  const userEyesPosition =
    Number(currentPosition) < 11
      ? "/src/media/pacman/eyes/eyesLeft.svg"
      : currentPosition < 21
        ? "/src/media/pacman/eyes/eyesUp.svg"
        : currentPosition < 31
          ? "/src/media/pacman/eyes/eyesRight.svg"
          : "/src/media/pacman/eyes/eyesDown.svg";

  const overlappingTranslations = [ 'translateX(0)' , 'translateX(-50%)' , 'translateX(-100%)' , 'translateX(-150%)' ]

  const translationStyle = {
    transform: playerNumber === 1 ? 'none' : overlappingTranslations[[index]],
  };

  return (
    <div className={`${playerNumber == 1 ? "":`-translate-x-${overlappingTranslations[index]}`} `} style={translationStyle} >
      <div className='h-full relative w-full'>
        <img src={UserPieceIcon} alt="" className='relative h-7' />
        <div className='absolute left-0 right-0 bottom-0 top-0 mx-auto my-auto'>
          <img src={userEyesPosition} alt="" className='h-7'/>
        </div>
      </div>

    </div>
  )
}

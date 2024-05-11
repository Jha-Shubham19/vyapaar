import React, { useContext, useEffect } from 'react'
import { chances_cards, chest_cards } from '../data/cards_details'
import chance_img from '../media/chance_img.png';
import chest_img from '../media/chest_img.png';
import { PlayersContext } from '../context/PlayersContext';

function Chance_n_Chest_Card(props) {
  const chanceInd = 8;
  const {setWhetherUserHasPurchasedProperty} = useContext(PlayersContext);
  useEffect(() => {
    console.log("me to aa gaya");
    setTimeout(()=> setWhetherUserHasPurchasedProperty(null), 2000);
  }, []);
  
  return (
    <div className='flex relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg bg-red-100' style={{gridArea: "4 / 6 / span 6/ span 4"}}>
      {/* <img src={chest_img} className="w-full h-auto my-auto opacity-10 align-middle" alt="Chance Image" /> */}
      <img src={chance_img} className="w-full h-auto my-auto opacity-10 align-middle" alt="Chance Image" />
      <div className='flex flex-col items-center justify-evenly text-black absolute top-0 left-0 w-full h-full'>
        <div className="text-[0.7rem] font-bold lg:text-2xl">{chances_cards[chanceInd].title}</div>
        <div className='text-[0.6rem] lg:text-base'>{chances_cards[chanceInd].description}</div>
      </div>
    </div>
  )
}

export default Chance_n_Chest_Card
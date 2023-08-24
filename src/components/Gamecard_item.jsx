import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { colors_of_properties } from '../data/cards_details';
import { PlayersContext } from '../context/PlayersContext';
import {PackMan} from "../components/PackMan"

function Gamecard_item(props) {

  const { currentCity, setCurrentCity, playerCount } = useContext(MyContext);
  const { allPlayersData } = useContext(PlayersContext);
  const colors_of_properties_array = Object.values(colors_of_properties);

  const handleMouseOver = () => {
    const cityName = props.property_details["City"].replace(/\s+/g, '')
    setCurrentCity(cityName)
  };

  const handleMouseOut = () => {
    // setCurrentCity(null)
  };

  const elementNo = props.property_details.eleNo;
  const cardBgColor = props.property_details.Card_Color;


  const { ...style_for_placement } = props.style_for_placement;

  return (
    <div className=" z-50 blur-none md:text-sm	 flex w-full h-full rounded-sm font-mono" style={style_for_placement}
      onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()}>
      {
        props.property_details["Card_Color"] && (cardBgColor != '#FFFFFF') &&
        <div className="" style={{ backgroundColor: cardBgColor, flex: 1 }}></div>
      }
      <div className="flex bg-[#FFFFFF] flex-col justify-evenly" style={{ flex: 2 }}>

        <div className='font-bold'>{props.property_details["City"]}</div>


        {
          props.property_details["Purchase_Price"] &&
          <div className='font-bold'>{props.property_details["Purchase_Price"]}</div>
        }
      </div>

      
      <div className={`absolute mx-auto my-auto w-full h-full flex justify-center items-center flex-wrap ${(Math.floor((props.property_details.eleNo-1) / 10) & 1 || props.property_details.eleNo%10 === 1) ? 'flex-row' : 'flex-row'}`} >
          {
            allPlayersData.filter(val => props.property_details.eleNo === val.currentPosition).map((val,index) => {
              return <PackMan key={`player-${val.playerNumber}`} index={index} playerNumber={val.playerNumber} currentPosition={val.currentPosition} className={`${props.property_details.eleNo%10 === 1 ? 'relative top-3/4 self-start' : ''} 	text-slate-100`} />
            })
          }
        </div>
    </div>
  )
}
export default Gamecard_item
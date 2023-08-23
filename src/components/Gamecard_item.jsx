import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { colors_of_properties } from '../data/cards_details';
import { PlayersContext } from '../context/PlayersContext';
import img from "../media/cards/prisoner.svg"

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
    <div className="flex w-full h-full rounded-sm font-mono overflow-hidden" style={style_for_placement}
      onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()}>
      {
        props.property_details["Card_Color"] && (cardBgColor != '#FFFFFF') &&
        <div className="" style={{ backgroundColor: cardBgColor, flex: 1 }}></div>
      }
      <div className="flex relative bg-[#FFFFFF] flex-col justify-evenly" style={{ flex: 2 }}>
        <div className={`absolute  text-black text-[0.5rem] md:text-[1rem] top-0 left-0 w-full h-full flex justify-center gap-[0.1rem] flex-wrap items-center ${(Math.floor((props.property_details.eleNo-1) / 10) & 1 || props.property_details.eleNo%10 === 1) ? 'flex-row' : 'flex-col'}`} >
          {
            allPlayersData.filter(val => props.property_details.eleNo === val.currentPosition).map(val => {
              return <FontAwesomeIcon key={`player-${val.playerNumber}`} icon={faUserTie} className={`${props.property_details.eleNo%10 === 1 ? 'relative top-3/4 self-start' : ''} 	text-slate-100`} style={{ color: colors_of_properties_array[val.playerNumber - 1] }} />
            })
          }
        </div>

        <div className='font-bold'>{props.property_details["City"]}</div>

        {/* <div className='h-[20px]'>
          <img src={img} alt="" className='h-full w-full'/>
        </div> */}

        {
          props.property_details["Purchase_Price"] &&
          <div className='font-bold'>{props.property_details["Purchase_Price"]}</div>
        }
      </div>
    </div>
  )
}
export default Gamecard_item
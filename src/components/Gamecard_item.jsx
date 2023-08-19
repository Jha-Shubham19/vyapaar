import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

function Gamecard_item(props) {

  const { currentCity, setCurrentCity } = useContext(MyContext)

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
    <div className="flex border border-black w-full h-full" style={style_for_placement}
      onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()}>
      {
        props.property_details["Card_Color"] &&
        <div className="border-stone-950	border" style={{ backgroundColor: cardBgColor, flex: 1 }}></div>
      }
      <div className="flex flex-col justify-evenly" style={{ flex: 2 }}>
        <div className='flex  gap-1 pl-2 justify-center	items-center	flex-wrap'>
          <FontAwesomeIcon key="player-1" icon={faUserTie} className='text-lg text-red-500 '/>
          <FontAwesomeIcon key="player-2" icon={faUserTie} className='text-lg text-blue-500'/>
          <FontAwesomeIcon key="player-3" icon={faUserTie} className='text-lg text-green-500'/>
          <FontAwesomeIcon key="player-4" icon={faUserTie} className='text-lg text-yellow-500'/>
        </div>

        <div>{props.property_details["City"]}</div>
        {
          props.property_details["Purchase_Price"] &&
          <div>{props.property_details["Purchase_Price"]}</div>
        }
      </div>
    </div>
  )
}
export default Gamecard_item
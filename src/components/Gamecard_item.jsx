import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import {colors_of_properties} from '../data/cards_details';

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
    <div className="flex w-full h-full" style={style_for_placement}
      onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()}>
      {
        props.property_details["Card_Color"] &&
        <div className="" style={{ backgroundColor: cardBgColor, flex: 1 }}></div>
      }
      <div className="flex relative flex-col justify-evenly" style={{ flex: 2 }}>
        
        { props.playerCount && <div className={`absolute text-[0.5rem] md:text-[1rem] top-0 left-0 w-full h-full flex justify-center gap-[0.1rem] flex-wrap items-center ${(Math.floor((props.property_details.eleNo - 1) / 9) & 1 || !props.property_details.eleNo) ? 'flex-row' : 'flex-col'}`} >
          {
            Object.values(colors_of_properties).filter((val,ind)=> ind<props.playerCount).map((val,ind)=>{
              return <FontAwesomeIcon key={`player-${ind}`} icon={faUserTie} className={`${!props.property_details.eleNo ? 'relative top-3/4 self-start' : ''}`} style={{color:val}}/>
            })
          }
          
          {/* <FontAwesomeIcon key="player-1" icon={faUserTie} className={`${!props.property_details.eleNo ? 'relative top-3/4 self-start' : ''} text-red-500`} />
          <FontAwesomeIcon key="player-2" icon={faUserTie} className={`${!props.property_details.eleNo ? 'relative top-3/4 self-start' : ''} text-blue-500`} />
          <FontAwesomeIcon key="player-3" icon={faUserTie} className={`${!props.property_details.eleNo ? 'relative top-3/4 self-start' : ''} text-green-500`} />
          <FontAwesomeIcon key="player-4" icon={faUserTie} className={`${!props.property_details.eleNo ? 'relative top-3/4 self-start' : ''} text-yellow-500`} /> */}

        </div>}

        <div className='font-bold'>{props.property_details["City"]}</div>
        {
          props.property_details["Purchase_Price"] &&
          <div className='font-bold'>{props.property_details["Purchase_Price"]}</div>
        }
      </div>
    </div>
  )
}
export default Gamecard_item
import React, { useContext } from 'react'
import { MyContext } from "../context/MyContext"

function Gamecard_item(props) {

  const { currentCity, setCurrentCity } = useContext(MyContext)

  const handleMouseOver = () => {
    const cityName = props.property_details["City"].replace(/\s+/g, '')
    setCurrentCity(cityName)
  };

  const handleMouseOut = () => {
    // setCurrentCity(null)
  };

  const { ...style_for_placement } = props.style_for_placement;

  return (
    <div className="flex border border-black w-full h-full" style={style_for_placement}
      onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()}>
      {
        props.property_details["Card_Color"] &&
        <div style={{ backgroundColor: props.property_details["Card_Color"], flex: 1 }}></div>
      }
      <div className="flex flex-col justify-evenly" style={{ flex: 2 }}>
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
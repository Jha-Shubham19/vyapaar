import React from 'react'
import { card_details, colors_of_properties } from '../data/cards_details';
import Gamecard_item from './Gamecard_item';
import Chance_n_Chest_Card from './Chance_n_Chest_Card';
import Gamecard_item_details from "../components/Gamecard_item_details"

function Gamecard() {

  const make_style_for_placement = (eleNo) => {
    let resulting_style = {};

    if (eleNo <= 9)
      resulting_style = {
        gridRow: `12 / span 2`, gridColumn: `${9 + 3 - eleNo} / span 1`, flexDirection: "column",
      }
    else if (eleNo <= 18)
      resulting_style = {
        gridRow: `${18 + 3 - eleNo} / span 1`, gridColumn: `1 / span 2`, flexDirection: "row-reverse",
      }
    else if (eleNo <= 27)
      resulting_style = {
        gridRow: `1 / span 2`, gridColumn: `${3 + eleNo - 19} / span 1`, flexDirection: "column",
      }
    else if (eleNo <= 36) {
      resulting_style = {
        gridRow: `${3 + eleNo - 28} / span 1`, gridColumn: `12 / span 2`, flexDirection: "row",
      }
    }

    return resulting_style;
  }
  const addFourCorners = () => {
    let entriess = [
      <Gamecard_item key={"Free Parking"} font={'text-[0.55rem] lg:text-[1rem]'} property_details={{ City: "Free Parking" }} style_for_placement={{ gridRow: `1 / span 2`, gridColumn: `1 / span 2` }} />,
      <Gamecard_item key={"Go To Jail"} font={'text-[0.55rem] lg:text-[1rem]'} property_details={{ City: "Go To Jail" }} style_for_placement={{ gridRow: `1 / span 2`, gridColumn: `12 / span 2`, }} />,
      <Gamecard_item key={"Go"} font={'text-[0.55rem] lg:text-[1rem]'} property_details={{ City: "Go" }} style_for_placement={{ gridRow: `12 / span 2`, gridColumn: `12 / span 2`, }} />,
      <Gamecard_item key={"Jail"} font={'text-[0.55rem] lg:text-[1rem]'} property_details={{ City: "Jail" }} style_for_placement={{ gridRow: `12 / span 2`, gridColumn: `1 / span 2`, }} />,
    ];
    return entriess;
  }
  const function_call = () => {
    return [...Object.entries(card_details["cities"]).map(([key, { City, Card_Color, Purchase_Price }], ind) => {
      const eleNo = ind + 1;
      const style = make_style_for_placement(eleNo);
      const f_Card_Color = colors_of_properties[Card_Color];
      return <Gamecard_item key={key} property_details={{ City, f_Card_Color, Purchase_Price, eleNo }} style_for_placement={style} />;
    }), addFourCorners()];
  }
  return (
    <div className='grid text-center w-auto text-[0.4rem] aspect-square lg:h-auto lg:w-min lg:text-[0.65rem]' style={{ gridTemplateColumns: "repeat(13, 1fr)", gridTemplateRows: "repeat(13, 1fr)", gridAutoRows: "calc(100%/13)", gridAutoColumns: "calc(100%/13)", }}>
    
      <Gamecard_item_details />
      {
        function_call()
      }
      <Chance_n_Chest_Card />

      {/* <p style = {{gridColumn: "1 / span 2", gridRow: "1 / span 1",flexDirection:"row-reverse" , fontSize:""}} ></p> */}
    </div>
  )
}
// const citiesList = [
//   "Rasayani", "Karjat","Turbhe", "Kopar Kairane", "Ghansoli", "Airoli", 
//   "Uran", "Ulwe", "Pushpak Nagar","Dronagiri", "Taloja", "Taloja-MIDC", "Kalamboli", 
//   "New Panvel", 
//   "Mansarovar","Juinagar", "Seawoods", "Sanpada", "CBD Belapur", "Nerul","Vashi","Kharghar"
// ];
export default Gamecard
import React from 'react'
import Card from "./Card"
import { card_details } from "../data/cards_details"
import { MyContext } from '../context/MyContext'
import { useContext } from 'react'
const Gamecard_item_details = () => {

	const allDataArray = Object.values(card_details.cities);
	const { currentCity } = useContext(MyContext);
	
	return (
		<>
			{
				 
				currentCity && <Card cardData={card_details.cities[currentCity]} currentCity={currentCity}></Card>
			}
		</>
	)
}

export default Gamecard_item_details
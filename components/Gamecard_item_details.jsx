import React from 'react'
import Card from "../components/Card"
import { card_details } from "../data/cards_details"


const Gamecard_item_details = () => {

	const allDataArray = Object.values(card_details.cities);

	return (
		<>
			{
				allDataArray.map(
					(cardData, index) => {

						return <Card cardData={cardData} key={index}></Card>

					}
				)
			}
		</>
	)
}

export default Gamecard_item_details
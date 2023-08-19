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
						//show properties card only
						return cardData.Purchase_Price && cardData.City.indexOf("Tax")==-1 ? 
							<Card cardData={cardData} key={index} aboutToBePurchased={true}></Card> : null;

					}
				)
			}
		</>
	)
}

export default Gamecard_item_details
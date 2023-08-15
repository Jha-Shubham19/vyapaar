import React from 'react'
import Card from "../components/Card"
import { card_details } from "../data/cards_details"


const Gamecard_item_details = () => {

    const allDataArray = Object.values(card_details.cities);

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                allDataArray.map(
                    (cardData, index) => {
                        return <Card cardData={cardData} key={index}></Card>
                    }
                )
            }

        </div>
    )
}

export default Gamecard_item_details
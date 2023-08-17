import React from 'react'
import Card from "../components/Card"
import { card_details } from "../data/cards_details"


const Gamecard_item_details = () => {

    const allDataArray = Object.values(card_details.cities);

    return (
        <div className='absolute h-3/5	w-2/5 overflow-hidden flex justify-center items-center gap-4 mb-4 top-[10rem] left-[16rem] bottom-0 right-0'>

            <div className='flex justify-center items-center'>
                {
                    allDataArray.map(
                        (cardData, index) => {

                            return <Card cardData={cardData} key={index}></Card>

                        }
                    )
                }
            </div>

        </div>
    )
}

export default Gamecard_item_details
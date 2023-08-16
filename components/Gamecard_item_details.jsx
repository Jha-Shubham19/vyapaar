import React from 'react'
import Card from "../components/Card"
import { card_details } from "../data/cards_details"


const Gamecard_item_details = () => {

    const allDataArray = Object.values(card_details.cities);

    return (
        <div className='absolute h-auto w-2/5 overflow-hidden flex justify-center items-center top-[150px] bottom-[150px] gap-4 mb-4'>

            <div className='h-full w-2/5 mx-auto my-auto'>
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
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from "../context/MyContext"


function Card({ cardData }) {

    const { currentCity } = useContext(MyContext)

    const {
        Card_Color,
        City,
        Purchase_Price,
        Rent,
        Rent_with_1_House,
        Rent_with_2_Houses,
        Rent_with_3_Houses,
        Rent_with_4_Houses,
        Rent_with_2_Railroads,
        Rent_with_1_Railroads,
        Rent_with_3_Railroads,
        Rent_with_4_Railroads,
        Rent_with_Hotel,
        House_Price,
        Hotel_Price,
        Mortgage_Price
    } = cardData;

    const cityName = cardData.City.replace(/\s+/g, '')

    return (
        <div className={`w-full border border-slate-500  text-center absolute bottom-0 top-0 left-0 right-0 
            ${(currentCity == cityName ? "visible" : "invisible")}`} >

            <div className='m-1'>
                <div style={{ backgroundColor: Card_Color }} className='border border-slate-900'>
                    <div className='py-8 px-5' >
                        <h2 className={`italic`}> TITLE DEED</h2>
                        <h1>{City}</h1>
                    </div>
                </div>

                <div className='py-8 px-5'>
                    {
                        Purchase_Price && <p>Purchase Price: {Purchase_Price}</p>
                    }
                    {
                        Rent && <p >Rent: {Rent}</p>
                    }
                    {
                        Rent_with_1_House && <p>Rent with 1 House: {Rent_with_1_House}</p>
                        ||
                        Rent_with_1_Railroads && <p>Rent with 1 Railroad: {Rent_with_1_Railroads}</p>
                    }
                    {
                        Rent_with_2_Houses && <p>Rent with 1 House: {Rent_with_2_Houses}</p>
                        ||
                        Rent_with_2_Railroads && <p>Rent with 1 Railroad: {Rent_with_2_Railroads}</p>

                    }
                    {
                        Rent_with_3_Houses && <p>Rent with 1 House: {Rent_with_3_Houses}</p>
                        ||
                        Rent_with_3_Railroads && <p>Rent with 1 Railroad: {Rent_with_3_Railroads}</p>

                    }
                    {
                        Rent_with_4_Houses && <p>Rent with 1 House: {Rent_with_4_Houses}</p>
                        ||
                        Rent_with_4_Railroads && <p>Rent with 1 Railroad: {Rent_with_4_Railroads}</p>

                    }
                    {
                        Rent_with_Hotel && <p>with <span>hotel</span> : {Rent_with_Hotel}</p>
                    }
                    {
                        Mortgage_Price && <p>Mortgage Value: {Mortgage_Price}</p>
                    }
                    {
                        House_Price && <p>House Cost {House_Price}.each</p>
                    }
                    {
                        Hotel_Price && <p>Hotel, {Hotel_Price}.plus 4 houses</p>
                    }

                </div>
            </div>

        </div>
    );
}

Card.propTypes = {
    cardData: PropTypes.shape({
        Card_Color: PropTypes.string.isRequired,
        City: PropTypes.string.isRequired,
        Purchase_Price: PropTypes.string.isRequired,
        Rent: PropTypes.string.isRequired,
        Rent_with_1_House: PropTypes.string.isRequired,
        Rent_with_2_Houses: PropTypes.string.isRequired,
        Rent_with_3_Houses: PropTypes.string.isRequired,
        Rent_with_4_Houses: PropTypes.string.isRequired,

        //for different type of cards renting system

        Rent_with_1_Railroads: PropTypes.string.isRequired,
        Rent_with_2_Railroads: PropTypes.string.isRequired,
        Rent_with_3_Railroads: PropTypes.string.isRequired,
        Rent_with_4_Railroads: PropTypes.string.isRequired,

        Rent_with_Hotel: PropTypes.string.isRequired,
        House_Price: PropTypes.string.isRequired,
        Hotel_Price: PropTypes.string.isRequired,
        Mortgage_Price: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;

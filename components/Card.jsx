import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from "../context/MyContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding } from '@fortawesome/free-solid-svg-icons';

function Card({ cardData, aboutToBePurchased }) {

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
		<div className={`flex flex-col justify-between border border-slate-500 text-center
            ${(currentCity == cityName ? "block" : "hidden")} z-50  bg-slate-200`} style={{ gridArea: "4 / 6 / span 6/ span 4" }}>
			<div style={{ backgroundColor: Card_Color }} className='border border-slate-900 text-[0.7rem] font-bold md:text-2xl'>
				<div className='py-[0.5rem]' >
					<h1 className='font-semibold'>{City}</h1>
				</div>
			</div>
			<div className='flex flex-1 justify-center pt-1'>

				<div className='flex flex-col justify-between text-[0.5rem] text-gray-800 font-semibold md:text-[1rem] w-4/5'>
					<div>
						{
							Purchase_Price && <p>Purchase Price: {Purchase_Price}</p>
						}
						{
							Rent && <p className='text-gray-800 font-semibold'>Rent: {Rent}</p>
						}
						{
							Rent_with_1_House && <p className='text-gray-600 text-[0.3rem] md:text-[0.7rem]'>Rent are Doubled on owning all properties of same group</p>
						}
					</div>
					<div>
						{
							Rent_with_1_House && <div className='flex'>
								<p className='flex-1 text-left'>
									{
										Array(1).fill(0).map((num, ind) => <FontAwesomeIcon key={ind} icon={faHouse} className='text-green-700 ml-[0.1rem]' />)
									}
								</p>
								<p className='flex-1 text-right'>{Rent_with_1_House}</p>
							</div>
						}
						{
							Rent_with_2_Houses && <div className='flex'>
								<p className='flex-1 text-left'>
									{
										Array(2).fill(0).map((num, ind) => <FontAwesomeIcon key={ind} icon={faHouse} className='text-green-700 ml-[0.1rem]' />)
									}
								</p>
								<p className='flex-1 text-right'>{Rent_with_2_Houses}</p>
							</div>
							||
							Rent_with_2_Railroads && <p>2 Railroad: <span className='text-right'>{Rent_with_2_Railroads}</span></p>

						}
						{
							Rent_with_3_Houses && <div className='flex'>
								<p className='flex-1 text-left'>
									{
										Array(3).fill(0).map((num, ind) => <FontAwesomeIcon key={ind} icon={faHouse} className='text-green-700 ml-[0.1rem]' />)
									}
								</p>
								<p className='flex-1 text-right'>{Rent_with_3_Houses}</p>
							</div>
							||
							Rent_with_3_Railroads && <p>3 Railroad: <span className='text-right'>{Rent_with_3_Railroads}</span></p>

						}
						{
							Rent_with_4_Houses && <div className='flex'>
								<p className='flex-1 text-left'>
									{
										Array(4).fill(0).map((num, ind) => <FontAwesomeIcon key={ind} icon={faHouse} className='text-green-700 ml-[0.1rem]' />)
									}
								</p>
								<p className='flex-1 text-right'>{Rent_with_4_Houses}</p>
							</div>
							||
							Rent_with_4_Railroads && <p>4 Railroad: <span className='text-right'>{Rent_with_4_Railroads}</span></p>

						}
						{
							Rent_with_Hotel && <div className='flex'>
								<p className='flex-1 text-left'>
									{
										Array(1).fill(0).map((num, ind) => <FontAwesomeIcon key={ind} icon={faBuilding} className='text-red-900 ml-[0.1rem]' />)
									}
								</p>
								<p className='flex-1 text-right'>{Rent_with_Hotel}</p>
							</div>
						}

					</div>
					<div>
						{
							House_Price && <p className='text-[0.4rem]'>Construction {House_Price} Each</p>
						}
						{
							Mortgage_Price && <p className='text-gray-600'>Mortgage: {Mortgage_Price}</p>
						}
					</div>

				</div>
			</div>
			{
				aboutToBePurchased &&
				<div className="space-x-4 mb-[0.25rem] md:mb-[0.5rem]">
					<button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded">
						Buy
					</button>
					<button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded">
						Sell
					</button>
				</div>
			}
		</div>
	);
}

Card.propTypes = {
	cardData: PropTypes.shape({
		Card_Color: PropTypes.string,
		City: PropTypes.string,
		Purchase_Price: PropTypes.string,
		Rent: PropTypes.string,
		Rent_with_1_House: PropTypes.string,
		Rent_with_2_Houses: PropTypes.string,
		Rent_with_3_Houses: PropTypes.string,
		Rent_with_4_Houses: PropTypes.string,

		//for different type of cards renting system

		Rent_with_1_Railroads: PropTypes.string,
		Rent_with_2_Railroads: PropTypes.string,
		Rent_with_3_Railroads: PropTypes.string,
		Rent_with_4_Railroads: PropTypes.string,

		Rent_with_Hotel: PropTypes.string,
		House_Price: PropTypes.string,
		Hotel_Price: PropTypes.string,
		Mortgage_Price: PropTypes.string,
	}),
};

export default Card;

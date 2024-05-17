import React, { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/PlayersContext';
import { MyContext } from '../context/MyContext';
import {colors_of_players , card_details} from '../data/cards_details';
import { SocketContext } from '../context/SocketContext';


function useMovementFunctionality(props) {
  const { allPlayersData, setAllPlayersData, whosTurn, setWhosTurn, hisTurnJustEnded, setHisTurnJustEnded, allGameItemsRefs, whetherUserHasPurchasedProperty, setWhetherUserHasPurchasedProperty } = useContext(PlayersContext);
  const { currentCity, setCurrentCity,numberOnDices, myPlayerNumber, isMyTurn, playerCount } = useContext(MyContext);
  const {switchToNextPlayerTurn} = useContext(SocketContext)
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);
  const [totalSumOnDice, setTotalSumOnDice] = useState(-1);

  useEffect(() => {
    
    setTotalSumOnDice(numberOnDices[0] + numberOnDices[1]);
    
  }, [numberOnDices]);
  useEffect(() => {
    if (totalSumOnDice > 0) {

      const timer = setTimeout(() => {
        setAllPlayersData(prev => {
          const newValues = prev.map((val, ind) => {
            if (val.currentPosition == 40 && ind == whosTurn) val.currentPosition = 0;
            return ind === whosTurn ? { ...val, currentPosition: val.currentPosition + 1 } : val;
          });
          return newValues;
        });

        setTotalSumOnDice(prev => prev - 1); // Decrement remaining total sum
      }, 200);///increaseSpeed[0]

      return () => {
        clearInterval(timer);
      };
    }
    else if (totalSumOnDice == 0 && isMyTurn) {
      // setHisTurnJustEnded(whosTurn);
      const currPlayerCurrentLocation = allPlayersData[whosTurn].currentPosition;
      console.log(currPlayerCurrentLocation, allGameItemsRefs.current[currPlayerCurrentLocation]);
      
      let currentCityForComparison = allGameItemsRefs.current[currPlayerCurrentLocation].City.replace(/\s+/g, '');
      if(currentCityForComparison === "Go" || currentCityForComparison === "Jail" || currentCityForComparison === "FreeParking" || currentCityForComparison === "GoToJail" || currentCityForComparison === "IncomeTax" || currentCityForComparison === "LuxaryTax")
        {
          //ignore -> next 
          switchToNextPlayerTurn({whosTurn, playerCount});
          // setWhetherUserHasPurchasedProperty(0);
          // console.log("aaya");
          // setCurrentCity(null);
          // const nextTurn = (whosTurn+1) % allPlayersData.length;
          // setWhosTurn(nextTurn);  //this takes time
          // console.log("gg",whosTurn);
          // if(nextTurn+1 === myPlayerNumber) props.setBeat(true);
          // else props.setBeat(false);
        }
      else setCurrentCity(allGameItemsRefs.current[currPlayerCurrentLocation].City);

    }
  }, [totalSumOnDice]);

  // const getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
  // const startFromHere = () => {
  //   props.setBeat(prev => !prev);
  //   setIsIntervalRunning(prev => !prev);
  //   const interval = setInterval(() => {
  //     props.setNumberOnDices([getRandomDiceNumber(), getRandomDiceNumber()]);
  //   }, 60);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //     setIsIntervalRunning(prev => !prev);
  //   }, 300);
  // }
  // return [startFromHere];
}

export { useMovementFunctionality };
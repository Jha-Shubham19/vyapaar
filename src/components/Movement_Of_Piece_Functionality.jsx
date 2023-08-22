import React, { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/PlayersContext';

const getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
function useMovementFunctionality(props) {
  const { allPlayersData, setAllPlayersData, whosTurn, setWhosTurn } = useContext(PlayersContext);
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);
  const [totalSumOnDice, setTotalSumOnDice] = useState(-1);
  // const [increaseSpeed, setIncreaseSpeed] = useState([1,0]);

  useEffect(() => {
    if (!isIntervalRunning && totalSumOnDice != -1) {
      // if(props.numberOnDices[0]===props.numberOnDices[1]) props.setCountOfConsecutive(prev => prev+1);
      // if(props.countOfConsecutive === 3) {
      //   setIncreaseSpeed(prev => [4,10]); //10 = Jail
      //   props.setCountOfConsecutive(prev => []);
      // }
      setTotalSumOnDice(props.numberOnDices[0] + props.numberOnDices[1]);
    }
  }, [props.numberOnDices, isIntervalRunning]);
  useEffect(() => {
  
    if (!isIntervalRunning && totalSumOnDice > 0) {

      const timer = setTimeout(() => {
        setAllPlayersData(prev => {
          const newValues = prev.map((val, ind) => {
            if(val.currentPosition == 40 && ind==whosTurn) val.currentPosition=0;
            return ind === whosTurn ? { ...val, currentPosition: val.currentPosition + 1 } : val;
          });
          return newValues;
        });

        setTotalSumOnDice(prev => prev - 1); // Decrement remaining total sum
      }, 300);///increaseSpeed[0]

      return () => {
        clearInterval(timer);
      };
    }
    else if (totalSumOnDice == -1) setTotalSumOnDice(-2);
    else if (totalSumOnDice == 0) {
      setWhosTurn(prev => props.numberOnDices[0]===props.numberOnDices[1] ? prev : (prev + 1) % (allPlayersData.length));
      props.setBeat(prev => !prev);
    }
  }, [totalSumOnDice]);

  const startFromHere = () => {
    props.setBeat(prev => !prev);
    setIsIntervalRunning(prev => !prev);
    const interval = setInterval(() => {
      props.setNumberOnDices([getRandomDiceNumber(), getRandomDiceNumber()]);
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      setIsIntervalRunning(prev => !prev);
    }, 300);
  }
  return [startFromHere];
}

export { useMovementFunctionality };
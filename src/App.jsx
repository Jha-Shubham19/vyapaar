import React, { useContext, useEffect, useState } from "react";
import FailedApp from "./components/FailedApp";
import MyContextFunction,{MyContext} from "./context/MyContext";
import PlayersContextFunction,{PlayersContext} from "./context/PlayersContext";
import {socket} from './socket';
import { card_details } from "./data/cards_details";

function App() {
  const {setAllPlayersData , setWhosTurn, allGameItemsRefs, whosTurn, setWhetherUserHasPurchasedProperty} = useContext(PlayersContext);
  const {setPlayerCount, setNumberOnDices, myPlayerNumber, setMyPlayerNumber, setRoom, setIsMyTurn, playerCount, setCurrentCity} = useContext(MyContext);

  const urlPraser = new URLSearchParams(window.location.search);
  const room = urlPraser.get('code');
  const username = urlPraser.get('username');

  useEffect (() => {
    if(myPlayerNumber) {
      setIsMyTurn(myPlayerNumber === whosTurn+1);
    }
  },[whosTurn, myPlayerNumber])
  useEffect(() => {
    console.log("real app");
    let mySocketId;
    const handleConnection = ({socketId}) => {
      console.log(socketId);
      mySocketId = socketId;
      setRoom(room);
      socket.emit("join", {room, username});
    }
    const handleNewUserJoined = ({allPlayersData}) => {
      console.log(allPlayersData);
      const myPlayerNumber = allPlayersData.filter(({socketId}) => mySocketId === socketId)[0].playerNumber;
      console.log(myPlayerNumber);
      setMyPlayerNumber(myPlayerNumber);
      setAllPlayersData(allPlayersData);
      setPlayerCount(allPlayersData.at(-1).playerNumber);
      setWhosTurn(0);
    }
    const handleMakeDiceMovemet = ({randomDice}) => {
      setNumberOnDices(randomDice);
    }
    const handleBuyOfProperty = ({currPlayerCurrentLocation, whosTurn, currentCity, changeColor}) => {
        // console.log("decision made ", whetherUserHasPurchasedProperty);
      setAllPlayersData(prev => {
        const newValues = prev.map((val, ind) => {
          if(ind === whosTurn) {
            allGameItemsRefs.current[currPlayerCurrentLocation].boughtBy = whosTurn;
            allGameItemsRefs.current[currPlayerCurrentLocation].levelOfConstruction = 0;
          
            const nowColor = allGameItemsRefs.current[currPlayerCurrentLocation].Card_Color;
            const sameColorCards = [1,2,3,0,-1,-2,-3].map(val => {
              let ind = currPlayerCurrentLocation+val; 
              if(ind <= 0 || ind>40 || nowColor === "#FFFFFF") return null;
              if(allGameItemsRefs.current[ind].Card_Color != nowColor) return null;
              return allGameItemsRefs.current[ind];
            }).filter(val => val!=null);
            console.log(sameColorCards);
            if(sameColorCards.every(({boughtBy}) => boughtBy === whosTurn)) {
              sameColorCards.map(val => val.tripleRent = true);
            }
          }
          console.log(currentCity);
          return ind === whosTurn ? { ...val, propertiesOwned: [...(val.propertiesOwned), currentCity], cashAvailable: Number(val.cashAvailable)-Number(card_details.cities[currentCity].Purchase_Price) } : val;
        });
        console.log(newValues, card_details.cities[currentCity].Purchase_Price);
        return newValues;
      });
      // console.log(allGameItemsRefs,allGameItemsRefs.current[currPlayerCurrentLocation].refToDiv.current);
      allGameItemsRefs.current[currPlayerCurrentLocation].refToDiv.current.style.color=`${changeColor}`;
      
      // setCurrentCity(allGameItemsRefs.current[currPlayerCurrentLocation]);
      // setWhosTurn(prev => (prev+1)%allPlayersData.length);
      // setWhosTurn(prev => (prev+1)%allPlayersData.length);
      // props.setBeat(prev => !prev);
    }
    const handleSwitchToNextPlayerTurn = ({whosTurn, playerCount}) => {
      console.log("gg",whosTurn, playerCount);
      setWhetherUserHasPurchasedProperty(0);
      console.log("aaya");
      setCurrentCity(null);
      const nextTurn = (whosTurn+1) % playerCount;
      setWhosTurn(nextTurn);  //this takes time
      console.log("gg",whosTurn, nextTurn, playerCount);
    }
    
    socket.on("makeDiceMovemet", handleMakeDiceMovemet, arguments);
    socket.on("newUserJoined", handleNewUserJoined, arguments);
    socket.on("connection", handleConnection, arguments); // Use "connect" event instead of "connection"
    socket.on("buyOfProperty", handleBuyOfProperty, arguments);
    socket.on("switchToNextPlayerTurn", handleSwitchToNextPlayerTurn, arguments);
    // Cleanup function to remove the event listener
    return () => {
      socket.off("connection", handleConnection);
      socket.off("newUserJoined", handleNewUserJoined);
      socket.off("makeDiceMovemet", handleMakeDiceMovemet);
      socket.off("buyOfProperty", handleBuyOfProperty);
      socket.off("switchToNextPlayerTurn", handleSwitchToNextPlayerTurn);
    };
  }, []);
  const catchRandomDice = (randomDice) => {
    socket.emit("randomDiceIs", {room, randomDice});
  }
  return (
  
    <FailedApp></FailedApp>
    
  )
}

export default App;

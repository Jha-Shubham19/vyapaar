import React, { useContext, useEffect, useState } from "react";
import FailedApp from "./components/FailedApp";
import MyContextFunction,{MyContext} from "./context/MyContext";
import PlayersContextFunction,{PlayersContext} from "./context/PlayersContext";
import {socket} from './socket';

function App() {
  const {setAllPlayersData} = useContext(PlayersContext);
  const {setPlayerCount, setNumberOnDices, setMyPlayerNumber} = useContext(MyContext);

  const urlPraser = new URLSearchParams(window.location.search);
  const room = urlPraser.get('code');
  const username = urlPraser.get('username');


  useEffect(() => {
    console.log("real app");
    let mySocketId;
    const handleConnection = ({socketId}) => {
      console.log(socketId);
      mySocketId = socketId;
      socket.emit("join", {room, username});
    }
    const handleNewUserJoined = ({allPlayersData}) => {
      console.log(allPlayersData);
      const myPlayerNumber = allPlayersData.filter(({socketId}) => mySocketId === socketId)[0].playerNumber;
      console.log(myPlayerNumber);
      setMyPlayerNumber(myPlayerNumber);
      setAllPlayersData(allPlayersData);
      setPlayerCount(allPlayersData.at(-1).playerNumber);
    }
    const handleMakeDiceMovemet = ({randomDice}) => {
      setNumberOnDices(randomDice);
    }
    
    socket.on("makeDiceMovemet", handleMakeDiceMovemet, arguments);
    socket.on("newUserJoined", handleNewUserJoined, arguments);
    socket.on("connection", handleConnection, arguments); // Use "connect" event instead of "connection"
  
    // Cleanup function to remove the event listener
    return () => {
      socket.off("connection", handleConnection);
      socket.off("newUserJoined", handleNewUserJoined);
      socket.on("makeDiceMovemet", handleMakeDiceMovemet);
    };
  }, []);
  const catchRandomDice = (randomDice) => {
    socket.emit("randomDiceIs", {room, randomDice});
  }
  return (
  
    <FailedApp catchRandomDice={catchRandomDice}></FailedApp>
    
  )
}

export default App;

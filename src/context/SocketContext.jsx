import React, { createContext, useContext, useState } from 'react'
import {socket} from '../socket';
import { MyContext } from './MyContext';
import { PlayersContext } from './PlayersContext';

export const SocketContext = createContext();

export default function ContextProvider({ children }) {
  const {room} = useContext(MyContext);
  const catchRandomDice = (randomDice) => {
    console.log(room,randomDice);
    socket.emit("randomDiceIs", {room, randomDice});
  }
  const buyOfProperty = (args) => {
    console.log(args);
    socket.emit("buyOfProperty", args);
  }
  const switchToNextPlayerTurn = (args) => {
    socket.emit("switchToNextPlayerTurn", args)
  }
  const value = {
      catchRandomDice,
      buyOfProperty,
      switchToNextPlayerTurn,
  }

  return (<SocketContext.Provider value={value}>
      {children}
  </SocketContext.Provider>)
}
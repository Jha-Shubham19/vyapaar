import React, {createContext, useState} from 'react'


export const PlayersContext = createContext();
function PlayersContextProvider({children}) {
  const [allPlayersData, setAllPlayersData] = useState([]);
  const [whosTurn, setWhosTurn] = useState(0);
  const value = {
    allPlayersData,
    setAllPlayersData,
    whosTurn,
    setWhosTurn,
  };
  return (
    <PlayersContext.Provider value={value}>
      {children}
    </PlayersContext.Provider>
  )
}

export default PlayersContextProvider;
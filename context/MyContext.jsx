import React, { createContext, useState } from 'react'


export const MyContext = createContext();

export default function ContextProvider({ children }) {

    const [currentCity, setCurrentCity] = useState(null);
    const [playerSelected,setPlayerSelected] = useState(false);
    const [playerCount, setPlayerCount]=useState(2);

    const value = {
        currentCity,
        setCurrentCity,
        playerSelected,
        setPlayerSelected,
        playerCount,
        setPlayerCount
    }

    return (<MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>)
}


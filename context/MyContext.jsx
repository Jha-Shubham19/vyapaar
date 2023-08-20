import React, { createContext, useState } from 'react'


export const MyContext = createContext();

export default function ContextProvider({ children }) {

    const [currentCity, setCurrentCity] = useState(null);
    
    const value = {
        currentCity,
        setCurrentCity,
        
    }

    return (<MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>)
}


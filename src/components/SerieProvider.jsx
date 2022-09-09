import React from "react"
import { useUpdate } from "../hooks/useUpdate";

export const SerieContext = React.createContext();

export const SerieProvider = ({children}) => {
    const value = useUpdate("");
    return (
    <SerieContext.Provider value={value} >
        {children}
    </SerieContext.Provider>
  )
}

export const useSerieContext = () => {
    return React.useContext(SerieContext);
}

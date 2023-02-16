import { useContext, createContext, useState } from "react";

const INITIAL_STATE = {
    sidebarExpand: false,
}

const AppState = createContext(INITIAL_STATE)


export const StateProvider = ({children}) => {
    return (
        <AppState.Provider value={{}}>
            {children}
        </AppState.Provider>
    )
}
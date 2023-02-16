import { useContext, createContext, useState } from "react";

const INITIAL_STATE = {
    sidebarExpand: false,
}

const AppState = createContext(INITIAL_STATE)


export const StateProvider = ({children}) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    return (
        <AppState.Provider value={{openSidebar, setOpenSidebar}}>
            {children}
        </AppState.Provider>
    )
}
import { useState, createContext } from "react";

export const filterContext = createContext()

export const FilterContextProvider = ({children}) => {
    // --- State Management ---
    const [selectEndpoints, setSelectedEndpoints] = useState('everything');                 // everything || top-headline 
    const [selectedApi, setSelectedApi] = useState('newsapi');
    const [qSearch, setQSearch] = useState('japan');
    const [timeline, setTimeline] = useState(7); // from 1 day, week, month, year
    const [triggerFetch, setFetchLogic] = useState(false); // dependencies for useffect -> building url 

    const valuePass = {selectEndpoints, setSelectedEndpoints, 
        selectedApi, setSelectedApi,
        qSearch, setQSearch,
        triggerFetch, setFetchLogic
    }
    return (
        <filterContext.Provider value={valuePass}>
            {children}
        </filterContext.Provider>
    )
}
import { useState, createContext } from "react";

export const filterContext = createContext()

export const FilterContextProvider = ({children}) => {
    // --- State Management ---
    // for news api 

    // everything 
    const [selectEndpoints, setSelectedEndpoints] = useState('everything');                 // everything || top-headline 
    const [selectedApi, setSelectedApi] = useState('newsapi');
    const [qSearch, setQSearch] = useState('japan');
    const [timeline, setTimeline] = useState(7); // from 1 day, week, month, year
    const [sortBy, setSortBy] = useState('publishedAt')
    const [triggerFetch, setFetchTrigger] = useState(false); // dependencies for useffect -> building url 
    // top-headline 
    const [selectedCategory, setCategory] = useState('general');

    const valuePass = {selectEndpoints, setSelectedEndpoints, 
        selectedApi, setSelectedApi,
        qSearch, setQSearch,
        triggerFetch, setFetchTrigger, 
        timeline, setTimeline, 
        sortBy, setSortBy,
        selectedCategory, setCategory
    }
    return (
        <filterContext.Provider value={valuePass}>
            {children}
        </filterContext.Provider>
    )
}
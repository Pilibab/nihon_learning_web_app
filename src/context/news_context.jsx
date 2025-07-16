import { NEWS_API_URL } from '../api';
import { createContext, useContext, useEffect,useState } from 'react';
import { fetchArticles } from '../utilities/handle_api';
import { buildUrl } from '../utilities/build_url';
import { filterContext } from './filter_context';

export const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
    const {selectedApi, selectEndpoints, qSearch, triggerFetch, setFetchTrigger, timeline, sortBy, selectedCategory} = useContext(filterContext)

    useEffect(() => {
        const param = {
                endPoint: selectEndpoints,        // "everything" or "top-headlines"
                q: qSearch,
                // sources,
                // domains,
                // excludeDomains,
                sortBy,
                category: selectedCategory,
                // searchIn, 
                timeline: timeline
        }
        console.log("setting up url");
        const newsApiUrl = buildUrl(selectedApi, param)
        console.log("log url: ", newsApiUrl);
        
		fetchArticles(newsApiUrl)
        .then(data =>
            { 
                if (data?.articles) 
                    setArticles(data.articles)
                else {
                    setArticles([])
                }
            })
        .catch(err => 
            {
                console.error("failed to fetch", err);
                setArticles([])
            })
        .finally(()=>setFetchTrigger(false))
        
	}, [triggerFetch]);
    return (
        <NewsContext.Provider value={{articles}}>
            {children}
        </NewsContext.Provider>
    )
}


import { NEWS_API_URL } from '../api';
import { createContext, useContext, useEffect,useState } from 'react';
import { fetchArticles } from '../utilities/handle_api';
import { buildUrl } from '../utilities/build_url';
import { filterContext } from './filter_context';

export const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
    const {selectedApi, selectEndpoints, qSearch} = useContext(filterContext)
    
    const param = {
        q: qSearch,
        endPoint: selectEndpoints
    }

    useEffect(() => {
        const newsApiUrl = buildUrl(selectedApi, param)
        
        console.log("log url: ", newsApiUrl);
        
		fetchArticles(NEWS_API_URL)
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
	}, [selectedApi, selectEndpoints, qSearch]);
    return (
        <NewsContext.Provider value={{articles}}>
            {children}
        </NewsContext.Provider>
    )
}


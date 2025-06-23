import { NEWS_API_URL } from '../api';
import { createContext, useEffect,useState } from 'react';
import {fetchArticles} from '../utilities/handle_api';

export const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
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
	}, []);
    return (
        <NewsContext.Provider value={{articles}}>
            {children}
        </NewsContext.Provider>
    )
}


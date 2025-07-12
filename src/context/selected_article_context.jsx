// selected article_context.jsx
import { createContext, useState, useContext } from "react"
import { NewsContext } from "./news_context";


export const SelectedArticleContext = createContext()

export const SelectedArticleProvider = ({children}) => {
        const {articles} = useContext(NewsContext);
    
        const [selectedIndex, setSelectedArticleIndex] = useState(null);
    
        // Get the actual article 
        const selectedArticle = selectedIndex !== null && articles && articles.length ?
            articles[selectedIndex] : null;      // if index exist use index to access article 
        
        const clearIndex = () => {
            // on close clear selectedIndex
            setSelectedArticleIndex(null);
        }
        return (
            <SelectedArticleContext.Provider value={{selectedArticle, clearIndex, setSelectedArticleIndex}}>
                {children}
            </SelectedArticleContext.Provider>
        )
}
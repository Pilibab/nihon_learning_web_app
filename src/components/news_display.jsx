import { useContext } from "react";
import { NewsContext } from "../context/news_context";
import {SelectedArticleContext} from "../context/selected_article_context"
import { titleStyle } from "../utilities/styles";
import image from "../assets/no_image.jpg"


export const DisplayNew = () => {
    const {articles} = useContext(NewsContext);
    const altImage = image

    const {setSelectedArticleIndex} = useContext(SelectedArticleContext)
    // Styles for article box 
    const articleboxStyle = "flex space-x-4 p-4 rounded-lg shadow-md" + 
    " bg-white border border-gray-200" +
    " hover:bg-gray-200 transition duration-200 ease-in-out" + // selection animation on hover 
    " dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" // darkmode settings 
    // Styles for article lists info 
    const infoStyle = "text-sm text-gray-600 dark:text-gray-400"

    // render articles card
    if (!articles || !Array.isArray(articles) || articles.length === 0)
    {   // If there is no articles recieved then send fall back message 
        return <p className="text-gray-500 
        text-center py-10
        dark:text-gray-400 "> No news / articles to display </p>
    }
    return (
        <div className="flex flex-col space-y-4 w-[calc(100%-100px)]">
            {articles.map((article, index) => (
                <a key={article.url} 
                    className={`${articleboxStyle}`}
                    href={article.url} // for now, TODO: take link to display the content of the article 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        e.preventDefault()
                        setSelectedArticleIndex(index)
                        }}> 

                    <img className="w-[150px] h-[100px] object-cover rounded " 
                    onError={(e)=>{ 
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = altImage}}
                    src={article.urlToImage || altImage} 
                    alt="Failed to load"
                    />
                    <div className="flex flex-col justify-between">
                        <p className={`${titleStyle} + text-lg`}>{article.title}</p>

                        <div className="flex flex-col space-y-2">            
                            <p className={infoStyle}>
                                {article.author && `Author: ${article.author}` /* Load only if exists */}  
                                {article.publishedAt && ` - ${new Date(article.publishedAt).toLocaleDateString()}`}
                            </p>
                            <p className={infoStyle}>
                                source: {article.source.name}
                            </p>      
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
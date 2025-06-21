import { useContext } from "react";
import { NewsContext } from "./news_context";

export const DisplayNew = () => {
    const {articles} = useContext(NewsContext);
    // render articles card
    if (!articles || !Array.isArray(articles) || articles.length === 0)
    {
        return <p className="text-gray-100"> No news / articles to display </p>
    }
    return (
        <>
            {articles.map((articles, index) =>(
                <div key={articles.url} className="flex space-x-4 border p-4 rounded shadow w-[calc(100%-100px)]">
                    <img className="w-40 h-24 object-cover rounded " 
                    src={articles.urlToImage} 
                    alt={`${articles.title}.png`}></img>
                    <div>
                        <p>{articles.title}</p>
                        <p>source: {articles.source.name}</p>                  
                    </div>
                </div>
            ))}
        </>
    )
}
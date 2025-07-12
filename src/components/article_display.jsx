// article_display.jsx
import { useContext } from "react"
import { SelectedArticleContext } from "../context/selected_article_context"
import image from "../assets/no_image.jpg"
import { titleStyle } from "../utilities/styles"

export const DisplayArticle = () => {
    const altImage = image
    const {selectedArticle, clearIndex} = useContext(SelectedArticleContext)
    const articleBoxStyle = "flex flex-col items-center space-x-4 p-4 rounded-lg shadow-md bg-white border border-gray-200 w-[calc(100%-100px)]";
    const textLabelStyle = "text-xs text-gray-600 select-text"

    // Helper function to format time ago
    const formatTimeAgo = (dateString) => {
        const publishedDate = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now - publishedDate) / 1000);

        let interval = seconds / 31536000; // seconds in a year
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000; // seconds in a month
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400; // seconds in a day
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600; // seconds in an hour
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60; // seconds in a minute
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        if (seconds < 10) return "just now";
        return Math.floor(seconds) + " seconds ago";
    };

    return (
        <div className={articleBoxStyle}>
            <button
                className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                onClick={clearIndex}>
                    ← Back to News List
            </button>
            {
                selectedArticle.urlToImage && (
                    <img
                    className="h-64 object-cover rounded mb-4"
                    src={selectedArticle.urlToImage || altImage}
                    alt={selectedArticle.title}
                    onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop if altImage also fails
                        e.currentTarget.src = altImage; // Fallback to alt image
                    }}
                />)
            }
            <div className="border-t-[5px] border-gray-200 mt-2 pt-3">
                <div>
                    <p className={`${titleStyle} + text-2xl select-text`}>{selectedArticle.title}</p>
                    <p className={textLabelStyle}>{formatTimeAgo(new Date(selectedArticle.publishedAt).getTime())}</p>
                    <p className="text-base text-gray-900select-text mt-2 ">{selectedArticle.author}</p>
                    <p className={textLabelStyle}>source: {selectedArticle.source.name}</p>                    
                </div>
                <div>
                    <p className="select-text mt-[5px]">
                        <span className={`${textLabelStyle} select-text `}>Content: </span><br></br>
                        {selectedArticle.content}
                    </p>
                </div>

            </div>
        </div>
    )
} 
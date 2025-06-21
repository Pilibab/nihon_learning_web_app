// import { NEWS_API_URL } from '../api';

// handle_api.js
// components > 
export const fetchArticles = async (news_api) => {
    console.log("The NEWSAPI_URL is:", news_api);
    try {
        const response = await fetch(news_api);
        if (!response.ok){
            const errorData = await response.json(); // Try to get error details
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        console.log(data);
        return data
        
    } catch (error) {
        console.error("Error fetching news:", error )
        throw error 
    }
};

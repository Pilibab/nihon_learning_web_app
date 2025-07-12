
const NEWS_API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
const NEWS_DATA_IO_KEY = process.env.REACT_APP_NEWSDATAI_KEY
// everything 
export const NEWS_API_URL = `https://newsapi.org/v2/everything?q=japan&language=jp&sortBy=relevancy&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

// export const NEWS_API_URL = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=95f0a9ba73194f7ea4e9fb8db3c94cbe";


export const NEWS_API_BASE_URL = `https://newsapi.org/v2/`;  // + (everyting? | top-headline?)

export const NEWS_API_KEY_PART = `&apiKey=${NEWS_API_KEY}`;

// special cases 
export const NEWS_API_TOP = `country=jp`






export const NEWSDATAIO =  `https://newsdata.io/api/1/latest?apikey={NEWS_DATA_IO_KEY}`
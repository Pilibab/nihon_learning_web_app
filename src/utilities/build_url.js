import { NEWS_API_BASE_URL, NEWS_API_KEY_PART } from "../api"

const parsedParam = (q, searchIn) => {
    const allowedSearchIn = ["title", "content", "description"];
    const lowered = q.toLowerCase()
    const match = lowered.match(/\s*searchin:([a-z,]+)/); // should take the first immediaate word after search in
    console.log(match);

    let extractedSearchIn = searchIn;
    let cleanedQ = q;

    if (match) {
        const [fullMatch, fields] = match;
        console.log("full: ", fullMatch);
        console.log("field: ", fields);
        
        const validFields = fields
        .split(",")
        .map(f=>f.trim())   // remove leading / trailing white space
        .filter(f=>allowedSearchIn.includes(f))
        console.log("valid: ", validFields);
        if (validFields.length > 0) {
        extractedSearchIn = validFields.join(",");
        cleanedQ = q.replace(fullMatch, "").trim();
        }
    }
    return { q: cleanedQ.trim(), searchIn: extractedSearchIn };
}

export const buildUrl = (typeOfApi, param) => {
    console.log("building");
    
    // EVERYTHING endpoint parameters (https://newsapi.org/v2/everything)
    /*
    * searchIn        - title, description, content
    * sources         - comma-separated list of source identifiers (max 20)
    * domains         - restrict search to specific domains
    * excludeDomains  - exclude results from specific domains
    * from            - ISO 8601 date (oldest article allowed)
    * to              - ISO 8601 date (newest article allowed)
    * sortBy          - relevancy | popularity | publishedAt
    */
    // TOP-HEADLINES endpoint parameters (https://newsapi.org/v2/top-headlines)
    /*
    * category        - business | entertainment | general | health | science | sports | technology
    * sources         - comma-separated source identifiers (can't be used with country/category)
    * 
    *   common 
    * endPoints
    * pagination 
    * pagesize          -> 100 
    * q
    * 
    */
    if (typeOfApi === "newsAPi")
    {
        const {
            endPoint,        // "everything" or "top-headlines"
            q,
            sources,
            domains,
            excludeDomains,
            from, // can be 1 week day 
            to,
            sortBy,
            category,
            country = "jp",
            language = "jp", // default to jp
            pageSize = 100,
            page = 1,
            searchIn
        } = param;


        const base = NEWS_API_BASE_URL;
        const key = NEWS_API_KEY_PART;

        // Default to last 3 days if "from" is not given
        const today = new Date();
        const spanDays = new Date(today);
        spanDays.setDate(today.getDate() - 7);

        const fromDate = from || spanDays.toISOString().split('T')[0];
        const toDate = to || today.toISOString().split('T')[0];

        const {q: parsedQ, searchIn: parsedSearchIn} = parsedParam(q, searchIn)
        const endpoint = endPoint === "everything"? "everything?": "top-headlines?"

        if (endpoint === "everything?" ) {
            // parameters for everything 
            const params = {
                q: parsedQ,              // -> japan
                domains,
                excludeDomains,
                from: fromDate,
                to: toDate,
                sortBy,         // -> relevance
                country,        // -> japan
                language,       // -> japan
                pageSize,
                page,
                searchIn: parsedSearchIn
            };
                // `https://newsapi.org/v2/everything?q=japan&language=jp&sortBy=relevancy&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
            const filteredParams = Object.entries(params)
                .filter(([_, v]) => v !== undefined && v !== null)
                .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
            // to use searchIn
            // ${q} searchin:(title,content,description) -> so q handles both q and searchin
            const queryString = new URLSearchParams(filteredParams).toString();
            const url = `${base}${endpoint}${queryString}${key}`;

            return url;
        } else if ( endPoint === "top-headlines?") {
            
        } else {

        }
    }
}

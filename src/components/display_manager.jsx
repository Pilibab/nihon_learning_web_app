// display_manager.jsx
import { useContext} from "react"
import { SelectedArticleContext } from "../context/selected_article_context"
import { DisplayNew } from "./news_display";
import { SearchBar} from "./search_bar"
import { DisplayArticle } from "./article_display";
import { DisplayEndpointMenu } from "./endpoint_selector";


export const NewsDisplayManager = () => {
    
    const {selectedArticle} = useContext(SelectedArticleContext)
    
    return (
        <>
            {selectedArticle !== null? (
                <DisplayArticle/>
            ) : (
                <>
                    <DisplayEndpointMenu/>
                    <SearchBar/>
                    <DisplayNew/>
                </>
            )
            }
        </>
    )
}

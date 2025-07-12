// display_manager.jsx
import { useContext} from "react"
import { SelectedArticleContext } from "../context/selected_article_context"
import { DisplayNew } from "./news_display";
import { DisplayFilter} from "./news_filter"
import { DisplayArticle } from "./article_display";


export const NewsDisplayManager = () => {
    
    const {selectedArticle} = useContext(SelectedArticleContext)
    
    return (
        <>
            {selectedArticle !== null? (
                <DisplayArticle/>
            ) : (
                <>
                    <DisplayFilter/>
                    <DisplayNew/>
                </>
            )
            }
        </>
    )
}

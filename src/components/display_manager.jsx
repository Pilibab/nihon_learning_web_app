import { useContext} from "react"
import { SelectedArticleContext } from "../context/selected_article_context"
import { DisplayNew } from "./news_display";
import { DisplayFilter} from "./news_filter"
import { DisplayArticle } from "./article_display";


export const NewsDisplayManager = () => {
    
    const {selectedIndex} = useContext(SelectedArticleContext)
    
    return (
        <>
            {selectedIndex !== null? (
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

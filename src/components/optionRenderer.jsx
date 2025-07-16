import { useContext } from "react"
import { filterContext } from "../context/filter_context"

export const RenderOptions = ({rangeOption, selectedValue, defaultOptionStyle, chosenOptionStyle, functionUpdater, containerStyle, isRenderngEndpoint }) => {
    const {setFetchTrigger, selectEndpoints} = useContext(filterContext)
    return (
    <div className={`${containerStyle}`}>
        {
            rangeOption.map((option) => {
                return (
                    <div
                        key={option.value}
                        onClick={() => {
                            functionUpdater(option.value)
                            {if (isRenderngEndpoint) 
                            {
                                setFetchTrigger(true);
                                console.log(": is it?");
                                console.log(`${isRenderngEndpoint}`);
                                console.log(`${selectEndpoints}`);
                            }
                            }}
                        }
                        className={`${defaultOptionStyle} ${selectedValue === option.value? chosenOptionStyle: null}`}>
                            {option.label}
                    </div>
                )
            })
        }
    </div>
    )
}
import { useContext } from "react"
import { RenderOptions } from "./optionRenderer"
import { filterContext } from "../context/filter_context"

export const DisplayEndpointMenu = () => {

    const {selectEndpoints, setSelectedEndpoints, selectedApi} = useContext(filterContext)
    const chosenOption = "bg-gray-300"
    const endPointStyle = "border border-gray-400 w-[140px] px-4 py-1 flex justify-center cursor-pointer" + "transition-colors duration-200 ease-in-out " 
    const containerStyle = "flex flex-row cursor-pointer "

    const optionNewsApiEndpoints = [
        {label: 'everything', value: 'everything'},
        {label: 'top headline',  value: 'top-headlines'}
    ]
    const optionTheNewsApiEndpoint = []

    const aptEndpointOption = selectedApi === "newsapi"? optionNewsApiEndpoints: optionTheNewsApiEndpoint;
    
    return (
        <RenderOptions                     
            rangeOption={aptEndpointOption} // Pass the array of options
            selectedValue={selectEndpoints}     // Pass the currently selected value from context
            defaultOptionStyle={endPointStyle}  // Pass the default style string
            chosenOptionStyle={chosenOption}    // Pass the style for the chosen option
            functionUpdater={setSelectedEndpoints} // Pass the handler function 
            containerStyle={containerStyle}
            isRenderngEndpoint={true}
        />
    )
}



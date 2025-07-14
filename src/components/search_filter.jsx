import { useState, useContext } from "react";
import { filterContext } from "../context/filter_context";

function FilterDropdown() {

    // Get context 
    const { timeline, setTimeline, sortBy, setSortBy, setFetchTrigger} = useContext(filterContext);

    const [toggleFilter, setToggleFilter] = useState(false);
    const [uploadValue, setUploadValue] = useState(timeline);
    const [selectedSortby, setSelectedSortby] = useState(sortBy);

    // Style for the button that opens the filter
    const filterButtonStyle = "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200";

    // Style for the modal/filter content box itself
    const filterContentStyle = "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 " +
                               "relative max-w-lg w-full max-h-[90vh] overflow-y-auto"; // Added max-width, full width up to max-width, and scroll for content

    // Style for the close button inside the modal
    const closeButtonStyle = "absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl font-bold p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200";

    // Overlay style for centering and blurring the background
    const overlayStyle = "fixed inset-0 z-50 flex items-center justify-center " +
                         "bg-black bg-opacity-20 backdrop-blur-sm transition-opacity duration-300"; // Added backdrop-blur-sm and transition
    // Style for the filter block
    const filterContainerStyle = `
        w-full h-full p-6 bg-white dark:bg-gray-800
        sm:rounded-lg sm:max-w-lg sm:max-h-[90vh] sm:w-full sm:h-auto sm:overflow-y-auto
        border border-gray-400 shadow-xl relative
        transition-transform duration-300 transform scale-95 sm:scale-100
        `;
    // Base styles for each button/label
    const baseItemStyle = "px-4 py-2 rounded-md cursor-pointer text-sm font-medium " +
                        "transition-colors duration-200 ease-in-out " +
                        "hover:bg-gray-100 dark:hover:bg-gray-700";

    // Styles for the selected item
    const selectedItemStyle = "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-700 dark:border-indigo-700 " +
                            "hover:bg-indigo-700 dark:hover:bg-indigo-800";

    // Styles for unselected items
    const unselectedItemStyle = "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300";

    const filterOptionSeparator = "mb-5 pb-[5px] border-b-[3px]"

    const dateRangeOptions = [
        { label: 'Today', value: 0 }, // 0 days ago
        { label: 'Last 7 Days', value: 7 },
        { label: 'Last 30 Days', value: 30 },
        { label: 'Last 3 Months', value: 90 },
        { label: 'Last Year', value: 365 },
        { label: 'All Time', value: 'all' }, // Special value for no date filtering
    ];

    const sortByRangeOption = [
        {label: 'relevancy', value:'relevancy'},
        {label: 'popularity', value:'popularity'},
        {label: 'published', value: 'publishedAt'}
    ]

    // handles the logic for toggling and passing to filter context 
    const handleSortBy = (value) => {
        setTimeline(value)
        setSelectedSortby(value)
    }
    const handleUploadTime = (value) => {
        setSortBy(value)
        setUploadValue(value)
    }

    
    return (
        <>
            <button 
            className={filterButtonStyle}
            onClick={()=> setToggleFilter(true)}>
                filter
            </button>

            {toggleFilter && 
                <div className={overlayStyle}>
                    <div className={filterContainerStyle}>
                        <button 
                            onClick={()=> {
                                setToggleFilter(!toggleFilter)
                                setFetchTrigger(true)
                            }}
                            className={closeButtonStyle}>
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Advanced Filters
                        </h2>
                        <div className="flex flex-row justify-evenly">
                            <div>
                                <p className={filterOptionSeparator} >Upload date</p>
                                {
                                    dateRangeOptions.map((option) => {
                                        return (
                                            <div 
                                            key={option.value}
                                            onClick={() =>  handleUploadTime(option.value)}
                                            className={`${baseItemStyle} ${uploadValue === option.value? selectedItemStyle: unselectedItemStyle}`}>
                                                {option.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <p className={filterOptionSeparator} >Sort by</p>
                                {
                                    sortByRangeOption.map((option) => {
                                        return (
                                            <div
                                            key={option.value}
                                            onClick={() => handleSortBy(option.value)}
                                            className={`${baseItemStyle} ${selectedSortby === option.value? selectedItemStyle: unselectedItemStyle}`}>
                                                {option.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default FilterDropdown;
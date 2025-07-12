import { Button } from "bootstrap";
import { useState } from "react";


function FilterDropdown() {
    const [toggleFilter, setToggleFilter] = useState(false)

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
                            onClick={()=> setToggleFilter(!toggleFilter)}
                            className={closeButtonStyle}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Advanced Filters
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            {/* Placeholder for actual filter options */}
                            This is where your dynamic filter options (like country, category, language, date range, etc.) will be placed.
                        </p>
                    </div>
                </div>
            }
        </>
    );
}

export default FilterDropdown;
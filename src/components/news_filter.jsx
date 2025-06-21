import { useState } from "react"

export const DisplayFilter = () => {
    const wrapperStyle = "flex w-[500px] h-[280px] p-6 mb-5 space-x-5 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"; 
    
    // Style for the container of each group of radio buttons (e.g., API choices, Endpoints choices)
    const radioGroupStyle = "flex flex-col space-y-2"; // Stacks vertically with space between items

    // Style for the heading of each section (e.g., "Api", "End points")
    const sectionHeadingStyle = "text-md font-semibold text-gray-800 dark:text-gray-200 mb-3";

    // Style for the label wrapping the radio input and its text span
    const radioLabelStyle = "inline-flex items-center text-gray-700 dark:text-gray-300 cursor-pointer";

    // Style for the radio input itself (requires @tailwindcss/forms plugin for full effect)
    const radioInputStyle = "form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 " +
                            "dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:focus:ring-indigo-600";
    
    // Style for the text span next to the radio input
    const radioSpanStyle = "ml-2";

    // --- State Management ---
    const [selectEndpoints, setSelectedEndpoints] = useState('everything');
    const [selectedApi, setSelectedApi] = useState('newsapi');

    const handleApiChange = (e) => setSelectedApi(e.target.value);
    const handleEndpointChange = (e) => setSelectedEndpoints(e.target.value);

    return (
        <div className={wrapperStyle}>
            {/* API Selection Section */}
            <div className={`${radioGroupStyle} mb-6`}> {/* mb-6 for spacing between API and Endpoints sections */}
                <p className={sectionHeadingStyle}>API:</p>
                
                <label className={radioLabelStyle}>
                    <input type="radio" 
                        name="api" // Ensure 'name' is consistent for the group
                        value="newsapi" 
                        checked={selectedApi === 'newsapi'} 
                        onChange={handleApiChange}
                        className={radioInputStyle}
                        // defaultChecked is not typically used with `checked` prop (controlled components)
                    />
                    <span className={radioSpanStyle}>News API</span>
                </label>
                
                <label className={radioLabelStyle}>
                    <input type="radio" 
                        name="api" 
                        value="newsdataio"
                        checked={selectedApi === 'newsdataio'}
                        onChange={handleApiChange}
                        className={radioInputStyle}
                    />
                    <span className={radioSpanStyle}>Newsdata.io</span>
                </label>
            </div>

            {/* Endpoints Section (conditionally rendered for News API) */}
            {selectedApi === 'newsapi' && ( 
                <div className={radioGroupStyle}>
                    <p className={sectionHeadingStyle}>Endpoints:</p>
                    
                    <label className={radioLabelStyle}>
                        <input type="radio"
                            name="endpoints" // Ensure 'name' is consistent for this group
                            value="everything"
                            checked={selectEndpoints === 'everything'}
                            onChange={handleEndpointChange}
                            className={radioInputStyle}
                            // defaultChecked is not used with `checked`
                        />
                        <span className={radioSpanStyle}>Everything</span>
                    </label>
                    
                    <label className={radioLabelStyle}>
                        <input type="radio"
                            name="endpoints"
                            value="topHeadLine"
                            checked={selectEndpoints === 'topHeadLine'}
                            onChange={handleEndpointChange}
                            className={radioInputStyle}
                            // defaultChecked is not used with `checked`
                        />
                        <span className={radioSpanStyle}>Top headline</span>
                    </label>
                </div>     
            )}

            {/* You would add a similar block for NewsData.io specific options here if needed */}
            {selectedApi === 'newsdataio' && (
                <div className={`${radioGroupStyle} mt-4`}>
                    <p className={sectionHeadingStyle}>Newsdata.io Options:</p>
                    {/* Add specific inputs/options for newsdataio here */}
                    <label className={radioLabelStyle}>
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span className={radioSpanStyle}>Include Sentiment</span>
                    </label>
                </div>
            )}
        </div>
    );
};
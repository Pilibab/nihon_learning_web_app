import { useContext } from "react";
import { filterContext } from "../context/filter_context";
import FilterDropdown from "./search_filter";

export const DisplayFilter = () => {
    const wrapperStyle =
        "flex flex-col w-full max-w-3xl p-6 mb-5 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700";

    const groupContainerStyle = "flex flex-col space-y-2";
    const sectionHeadingStyle = "text-md font-semibold text-gray-800 dark:text-gray-200 mb-2";
    const radioLabelStyle = "inline-flex items-center text-gray-700 dark:text-gray-300 cursor-pointer";
    const radioInputStyle =
        "form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 " +
        "dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:focus:ring-indigo-600";
    const checkboxStyle =
        "form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500";

    const radioSpanStyle = "ml-2";

    const {
        selectEndpoints,
        setSelectedEndpoints,
        selectedApi,
        setSelectedApi,
        qSearch,
        setQSearch,
    } = useContext(filterContext);

    return (
        <div className={wrapperStyle}>
            {/* Search Bar */}
            {selectedApi === "newsapi" && selectEndpoints === "everything" && (
                <div>
                    <div className="flex flex-row items-center">
                        <input
                            type="text"
                            placeholder="Search topic (title, content, description)"
                            value={qSearch}
                            onChange={e => setQSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    console.log(`searching: ${qSearch}`);
                                }}}
                            className="p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    <FilterDropdown/>
                    </div>
                </div>

            )}
        </div>
    );
};


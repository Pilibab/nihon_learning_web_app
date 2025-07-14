import { useContext } from "react";
import { filterContext } from "../context/filter_context";
import FilterDropdown from "./search_filter";

export const SearchBar = () => {
    const wrapperStyle =
        "flex flex-col w-full max-w-3xl p-6 mb-5 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700";

    const {
        selectEndpoints,
        selectedApi,
        qSearch,
        setQSearch, 
        setFetchTrigger
    } = useContext(filterContext);

    const submitFetchReq = (e) => {
        if (e.key === 'Enter') {
            console.log(`searching: ${qSearch}`);
            setFetchTrigger(true)
        }
    }
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
                            onKeyDown={(e) => submitFetchReq(e)}
                            className="p-2 w-full border rounded-md border-gray-300 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    <FilterDropdown/>
                    </div>
                </div>
            )}
        </div>
    );
};


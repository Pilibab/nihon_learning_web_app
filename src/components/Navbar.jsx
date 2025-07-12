import { useState } from "react"

function NavBar() {
    // Style for the navigation route(?)
    const [toggleSettings, setToggleSettings] = useState(false)
    const navigationStyles = "px-2 py-1 rounded hover:bg-indigo-600/20 transition duration-200 ease-in"

    // move to settings panel 
    const groupContainerStyle = "flex flex-col space-y-2";
    const sectionHeadingStyle = "text-md font-semibold text-gray-800 dark:text-gray-200 mb-2";
    const radioLabelStyle = "inline-flex items-center text-gray-700 dark:text-gray-300 cursor-pointer";
    const radioInputStyle =
        "form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 " +
        "dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:focus:ring-indigo-600";
    const radioSpanStyle = "ml-2";
    return (
        <nav className="flex justify-between items-center px-10 py-2 bg-white shadow-md dark:bg-gray-900">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-indigo-600">JPReader</h1>
                <a href="/" className={navigationStyles}>Home</a>
                <a href="/my-words" className={navigationStyles}>My Words</a>
                <button 
                    className={navigationStyles}
                    onClick={() => setToggleSettings(!toggleSettings)}>
                    Settings
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Look up kanji..." // might be obselete
                    className="px-2 py-1 border rounded"
                />
            </div>

            {/**toggle side pannel */
                toggleSettings && (<div className="fixed right-0 top-0 h-full w-64 bg-white border-l-2 dark:bg-gray-800 shadow-lg px-6 py-5 z-50 transition-transform duration-300 ease-in-out">
                    <h2 className="text-lg font-bold mb-10 text-indigo-600 ">Settings</h2>

                    <div className={groupContainerStyle}>
                        <p className={sectionHeadingStyle}>Select API:</p>
                        <label className={radioLabelStyle}>
                            <input
                                type="radio"
                                name="api"
                                value="newsapi"
                                // checked={selectedApi === "newsapi"}
                                // onChange={handleApiChange}
                                className={radioInputStyle}
                            />
                            <span className={radioSpanStyle}>News API</span>
                        </label>
                        <label className={radioLabelStyle}>
                            <input
                                type="radio"
                                name="api"
                                value="newsdataio"
                                // checked={selectedApi === "newsdataio"}
                                // onChange={handleApiChange}
                                className={radioInputStyle}
                            />
                            <span className={radioSpanStyle}>Newsdata.io</span>
                        </label>
                    </div>
                    <button
                        onClick={() => setToggleSettings(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                    >
                        ✕
                    </button>
                </div>
            )}
        </nav>
    )
}

export default NavBar
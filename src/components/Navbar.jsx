
function NavBar() {
    // Style for the navigation route(?)
    const navigationStyles = "px-2 py-1 rounded hover:bg-indigo-600/20 transition duration-200 ease-in"
    return (
        <nav className="flex justify-between items-center px-10 py-2 bg-white shadow-md dark:bg-gray-900">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-indigo-600">JPReader</h1>
                <a href="/" className={navigationStyles}>Home</a>
                <a href="/my-words" className={navigationStyles}>My Words</a>
                <a href="/settings" className={navigationStyles}>Settings</a>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Look up kanji..." // might be obselete
                    className="px-2 py-1 border rounded"
                />
            </div>
        </nav>
    )
}

export default NavBar
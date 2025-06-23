
import NavBar from './components/Navbar';
import {NewsDisplayManager} from "./components/display_manager.jsx"


function App() {
	return (
			<div className="App" >
				<NavBar/>
				<div className='flex flex-col items-center w-full p-5'> 
					<NewsDisplayManager/>
				</div>
			</div>
	);
}

export default App;

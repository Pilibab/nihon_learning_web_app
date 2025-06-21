
import NavBar from './components/Navbar';
import { DisplayNew } from './components/news_display';
import { DisplayFilter } from './components/news_filter';

function App() {
	return (
			<div className="App" >
				<NavBar/>
				<div className='flex flex-col items-center w-full p-5'> 
					<DisplayFilter></DisplayFilter>
					<DisplayNew></DisplayNew>
				</div>
			</div>
	);
}

export default App;

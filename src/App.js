import './App.css';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

function App() {
  return (
    <div className="App">
      <h1>Our app</h1>
      <SearchField/>
      <GifCard/>
    </div>
  );
}

export default App;

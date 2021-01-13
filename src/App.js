import './App.css';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

function App() {
  return (
    <div className="App">
    
      <div className="App-header">
        <h1>Search GIPHY </h1>
      </div>

      <div className="SearchField">
        <SearchField/>
      </div>
    
    </div>
  );
}

export default App;

import './App.css';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';
import TrendingGifs from './components/TrendingGifs';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    
        <div className="App-header">
          <h1>Search GIPHY </h1>
        </div>

      
        <SearchField/>
        <Switch>
          <Route path="/" exact component={TrendingGifs}>
          <TrendingGifs/>
          <Route path="/Search" component={SearchField}/>
          </Route>
          <GifCard/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

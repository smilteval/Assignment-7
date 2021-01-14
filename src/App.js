import './App.css';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';
import TrendingGifs from './components/TrendingGifs';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <Router>
      <NavBar/>
        
        <Switch>
        <Route path="/" exact component={SearchField}/>
        <Route path="/Trending" component={TrendingGifs}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;


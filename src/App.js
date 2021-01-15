import './App.css';
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
          <Route path="/" exact component={TrendingGifs}/>
          <Route path="/Search" component={SearchField}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;


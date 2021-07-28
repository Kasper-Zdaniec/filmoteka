import Navbar from './Navbar';
import Films from './Films';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilmDetails from './FilmDetails';
import NewFilm from './NewFilm';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>    
        <Route exact path="/">
          <Films/>
        </Route>
        <Route path="/new-film">
          <NewFilm/>
        </Route>
        <Route path="/films/:id">
          <FilmDetails/>
        </Route>  
      </Switch>
    </div>
    </Router>
  );
}

export default App;

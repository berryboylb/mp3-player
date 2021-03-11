import logo from './logo.svg';
import Home from "./components/Home";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path = "/">
                  <Home />
              </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

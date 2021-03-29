import Home from "./components/Home";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path = "/">
                  <Home />
              </Route>
              <Route path = "/music">
              <Music />
          </Route>
          <Route path = "/about">
              <About />
          </Route>
          <Route path = "/contact">
              <Contact />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

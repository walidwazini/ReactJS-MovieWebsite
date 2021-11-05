import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import Home from './components/Home';
import Detail from './components/Detail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/movies/:imdbID' >
            <Detail />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

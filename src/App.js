import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header'
import Home from './components/Nav/Home'
import Nominations from './components/Nominations/Nominations'
import NominationsSmall from './components/Nominations/NominationsSmall'
import Submit from './components/Nominations/Submit'
import Search from './components/Search/Search'

import NominationContextProvider from './context/NominationContext';



function App() {

  return (
        <NominationContextProvider>
          <Router>
            <Header />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/nominations">
                <Nominations />
              </Route>

              <Route path="/search">
                <div id="stage">
                  <Search />
                  <NominationsSmall />
                </div>
              </Route>

              <Route path="/submit">
                <Submit />
              </Route>
            </Switch>
          </Router>
        </NominationContextProvider>
  );
}
export default App;

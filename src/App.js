import './App.scss';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header'
import Home from './components/Nav/Home'
import Nominations from './components/Nominations/Nominations'
import Submit from './components/Nominations/Submit'
import Search from './components/Search/Search'

import useMedia from 'react-media';
import NominationContextProvider from './context/NominationContext';



function App() {

  const isSmallScreen = useMedia({ query: "(max-width: 770px)" });

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
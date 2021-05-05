import './App.scss';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header'
import Splash from './components/Nav/Splash'
import Nominations from './components/Nominations/Nominations'
import Submit from './components/Nominations/Submit'
import Search from './components/Search/Search'

import Media, { useMedia } from 'react-media';
import NominationContextProvider from './context/NominationContext';



function App() {

  return (
        <NominationContextProvider>
          <Router>
            <Header />

            <Switch>
              <Route exact path="/">
                <Splash />
              </Route>

              <Route path="/nominations">
                <Nominations />
              </Route>

              <Route path="/search">
                <Search />
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
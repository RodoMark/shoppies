import './App.scss';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Nominations from './components/Nominations'
import MovieList from './components/MovieList'
import Banner from './components/Banners/Banner'
import BannerComplete from './components/Banners/BannerComplete'
import Search from './components/Search'
import InfoButton from './components/InfoButton'
import Media, { useMedia } from 'react-media';
import NominationContextProvider from './context/NominationContext';



function App() {
  const isSmallScreen = useMedia({ query: "(max-width: 667px)" });


  return (
        <NominationContextProvider>
          <Router>
            <Header />
            <Banner />

            <Switch>
              <Route exact path="/">
                Home Page
              </Route>

              <Route path="/nominations">
                <Nominations />
              </Route>

              <Route path="/search">
                <Search />
              </Route>
            </Switch>
              {isSmallScreen && <InfoButton />}
        

          </Router>
        </NominationContextProvider>
  );
}
export default App;
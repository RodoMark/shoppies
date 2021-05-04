import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Nominations from './components/Nominations'
import MovieList from './components/MovieList'
import Banner from './components/Banner'
import InfoButton from './components/InfoButton'
import Media, { useMedia } from 'react-media';
import NominationContextProvider from './context/NominationContext';

function App() {
  const isSmallScreen = useMedia({ query: "(max-width: 667px)" });


  return (
    <>
      <div className="App">
        <NominationContextProvider>
          <Banner />
          <MovieList />
          {isSmallScreen && <InfoButton />}
        </NominationContextProvider>
      </div>
    </>
  );
}
export default App;
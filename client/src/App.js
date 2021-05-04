import React, { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Banner from './components/Banner'
import InfoButton from './components/InfoButton'
import Media, { useMedia } from 'react-media';
import NominationContextProvider from './context/NominationContext';

function App() {
  const isSmallScreen = useMedia({ query: "(max-width: 667px)" });


  return (
    <NominationContextProvider>
      <div className="container">
      <Banner />
      <MovieList />
      {isSmallScreen && <InfoButton />}
      </div>
    </NominationContextProvider>
  );
}
export default App;
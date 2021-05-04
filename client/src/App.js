import React, { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Banner from './components/Banner'
import InfoButton from './components/InfoButton'
import Media, { useMedia } from 'react-media';

function App() {

  const isSmallScreen = useMedia({ query: "(max-width: 667px)" });

  const [nominations, setNominations] = useState([])


  return (
    
    <div className="container">
    <Banner nominations={nominations} />
    <MovieList />
    {isSmallScreen && <InfoButton />}
    </div>
  );
}
export default App;
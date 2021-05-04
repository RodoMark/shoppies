import React, { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Banner from './components/Banner'

function App() {

  const [nominations, setNominations] = useState([])

  return (
    <>
    <Banner nominations={nominations} />
    <MovieList />
    </>
  );
}
export default App;
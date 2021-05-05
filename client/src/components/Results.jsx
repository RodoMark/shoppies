import React from 'react'
import ResultCard from './ResultCard'

const Results = ( { results }) => {
  return (
    results ? 
      <ul className="results">
        {results.map(movie => (
          <li 
            key={movie.imdbID}
          >
            <ResultCard movie={movie} />
          </li>
        ))}
      </ul> : ''
  ) 
}

export default Results
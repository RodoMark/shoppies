import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchMovies, parseQuery } from '../api'

import { TextField } from '@material-ui/core'
import ResultCard from './ResultCard'

const Search = () => {
  const [title, setTitle] = useState('Harry')
  const [year, setYear] = useState('')
  const [results, setResults] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await fetchMovies({title, year})
        setResults(result.Search)
        console.log(results)
      } catch(error) {
        setResults([])
      }
      
    }

    callAPI()
  }, [title, year])

  return (
    <section className="search-page">
      <div className="container">
        <article className="add-content">
          <div className="input-wrapper">
            <TextField 
              onChange={(event) => setTitle(event.target.value)}
              id="film-search" 
              placeholder="Movie Title"
              label="Movie Title" 
              type="search" 
            />
            <TextField 
              onChange={(event) => setYear(event.target.value)}
              id="year-search"
              placeholder="Year"
              label="Year" 
              type="search" 
            />
          </div>

          {results.length > 0 ? (
            <ul className="results">
              {results.map(movie => (
                <li 
                  key={movie.imdbID}
                >
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          ) : <h1>Start searching to see your results</h1> }
        </article>
      </div>
    </section>
  )
}

export default Search
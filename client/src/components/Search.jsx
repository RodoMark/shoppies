import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { fetchMovies, parseQuery } from '../api'
import { debounce } from 'lodash'

import { TextField } from '@material-ui/core'
import ResultCard from './ResultCard'

const Search = () => {
  const [title, setTitle] = useState('Harry')
  const [year, setYear] = useState('')
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await fetchMovies({title, year})
        setResults(result.Search)
        console.log(results)
      } catch(error) {
        setResults([{Title: 'Error', Year: 'Data Currently Unavailable'}])
      }
      
    }

    callAPI()
  }, [title, year])

  

  const debounceTitle = useCallback(debounce((title) => setTitle(title), 1000), [])

  const handleChange = (event) => {
    const title = event.target.value
    debounceTitle(title)
  }

  return (
    <section className="search-page">
      <div className="container">
        <article className="add-content">
          <div className="input-wrapper">
            <TextField 
              onChange={(event) => handleChange(event)}
              id="film-search" 
              placeholder="Movie Title"
              label="Movie Title" 
              type="search" 
            />
          </div>

          {results ? (
            <ul className="results">
              {results.map(movie => (
                <li 
                  key={movie.imdbID}
                >
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          ) : <h1>Start searching to see potential nominees</h1> }
        </article>
      </div>
    </section>
  )
}

export default Search
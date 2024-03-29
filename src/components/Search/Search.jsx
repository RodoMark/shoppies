/* eslint-disable */

import React, { useState, useEffect, useCallback } from 'react'
import { fetchMovies } from '../../api'
import { debounce } from 'lodash'

import { TextField } from '@material-ui/core'

import Results from './Results'
import { CircularProgress } from '@material-ui/core'

const Search = () => {
  const [title, setTitle] = useState('Harry')
  const [year] = useState('')
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await fetchMovies({title, year})
        setResults(result.Search)
        console.log(results)
        setLoading(false)
      } catch(error) {
        setError(true)
      }
    }

    callAPI()
  }, [title, year])



  const debounceTitle = useCallback(debounce((title) => setTitle(title), 1000), [])

  const handleChange = (event) => {
    setError(false)
    setLoading(true)
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
              placeholder="Search"
              type="search"
            />
          </div>
          {error && <p className="error-text">There was an server error, please try again later.</p>}
          {(loading && !error) ? <CircularProgress /> : <Results results={results} />}

        </article>
      </div>
    </section>
  )
}

export default Search

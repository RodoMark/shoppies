import React, { useState, useEffect, useCallback } from 'react'
import { fetchMovies } from '../../api'
import { debounce } from 'lodash'

import { TextField } from '@material-ui/core'

import Results from './Results'
import { CircularProgress } from '@material-ui/core'

const Search = () => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await fetchMovies({title, year})
        setResults(result.Search)
        console.log(results)
        setLoading(false)

      } catch(error) {
        setResults([{Title: 'Error', Year: 'Data Currently Unavailable'}])
      }
    }
    callAPI()
  }, [title, year])

  const debounceTitle = useCallback(debounce((title) => setTitle(title), 1000), [])

  const handleChange = (event) => {
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
          
          {loading ? <CircularProgress /> : <Results results={results} />} 
          
        </article>
      </div>
    </section>
  )
}

export default Search
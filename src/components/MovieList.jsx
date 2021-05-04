import React, {useState, useEffect} from 'react'
import MovieListItem from './MovieListItem'
import { fetchMovies, parseQuery } from '../api'
import { Form, Button, TextField, Grid } from '@material-ui/core/';
import axios from 'axios'

const MovieList = (props) => {
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([{}])

  useEffect(() => {
    const call_API = async () => {
      const movies = await fetchMovies()
      setMovies([movies])
      console.log("MOVIES", movies)
    }

    call_API()
  }, [])

  const movieCards = movies.map(movie => {
    return <MovieListItem movie={movie} />
  })
  
  return(
    <section className="movie-list">
      <TextField id="standard-search" label="Movie Title" type="search" />
      <TextField id="standard-search" label="Year" type="search" />
      <TextField id="standard-search" label="Plot Length" type="search" />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      <Grid container spacing={3} justify='space-around'>
        {movieCards}
      </Grid> 
    </section>
  )
}

export default MovieList
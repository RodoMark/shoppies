import React, {useState, useEffect} from 'react'
import MovieListItem from './MovieListItem'
import { fetchMovies, parseQuery } from '../api'
import { Form, Button, TextField, Grid } from '@material-ui/core/';
import axios from 'axios'

const MovieList = (props) => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [movies, setMovies] = useState([{Title: "The Hobbit", Year: 2016, Director: "Peter Jackson"}])

  const callAPI = async () => {
    const movies = await fetchMovies({title, year})
    setMovies([movies])
    console.log("MOVIES", movies)
  }

  // useEffect(() => {
  //   callAPI()
  // }, [])

  const movieCards = movies.map(movie => {
    return <MovieListItem movie={movie} />
  })
  
  return(
    <section className="movie-list">
      <TextField 
        onChange={(event) => setTitle(event.target.value)}
        id="standard-search" 
        label="Movie Title" 
        type="search" 
      />
      <TextField 
        onChange={(event) => setYear(event.target.value)}
        id="standard-search"
        label="Year" 
        type="search" 
      />
      {/* <TextField id="standard-search" label="Plot Length" type="search" /> */}
        <Button 
          onClick={()=>callAPI()}
          variant="contained" 
          color="primary" 
          type="submit">
          Search
        </Button>
      <Grid container spacing={3} justify='space-around'>
        {movieCards}
      </Grid> 
    </section>
  )
}

export default MovieList
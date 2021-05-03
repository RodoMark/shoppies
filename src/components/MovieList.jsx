import React from 'react'
import MovieListItem from './MovieListItem'
import TextField from '@material-ui/core/TextField';

const MovieList = (props) => {
  return(
    <section className="movie-list">
    <TextField id="standard-search" label="Search field" type="search" />
    <div>Movie List</div>
    </section>
  )
}

export default MovieList
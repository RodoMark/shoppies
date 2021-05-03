import React, {useState} from 'react'
import MovieListItem from './MovieListItem'
import { Form, Button, TextField } from '@material-ui/core/';

const MovieList = (props) => {
  const [title, setTitle] = useState('')

  return(
    <section className="movie-list">

      <TextField id="standard-search" label="Movie Title" type="search" />
      <TextField id="standard-search" label="Year" type="search" />
      <TextField id="standard-search" label="Plot Length" type="search" />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      <div>Movie List</div>
    </section>
  )
}

export default MovieList
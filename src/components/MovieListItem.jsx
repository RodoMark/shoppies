import React, { useState } from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'

const MovieListItem = ({ movie }) => {
  const [nominated, setNominated] = useState(false)

  return (
    <Grid container spacing={3} justify='center'>
      <Grid item component={Card} xs={12} md={3} className={`movie-card ${nominated && 'movie-card--nominated'}`}>
      <CardContent>
          <Typography color="textSecondary" gutterBottom>{`Title: ${movie.Title}`}</Typography>
          <Typography color="textSecondary">Year: {movie.Year}</Typography>
          <Typography variant="body2">Director: {movie.Director}</Typography>
        </CardContent>

      </Grid>
    </Grid>
  )
}

export default MovieListItem
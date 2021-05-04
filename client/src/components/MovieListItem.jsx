import React, { useState } from 'react'
import { Card, CardContent, Typography, Grid, IconButton} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/Share';

const MovieListItem = ({ movie }) => {
  const [nominated, setNominated] = useState(false)

  return (
    <Card variant="outlined" item component={Card} xs={12} md={3} className={`movie-card ${nominated && 'movie-card--nominated'}`}>
    <CardContent>
      <Typography variant="header" gutterBottom>{`Title: ${movie.Title}`}</Typography>
      <Typography variant="body2">Year: {movie.Year}</Typography>
      <Typography variant="body2">Director: {movie.Director}</Typography>
      <IconButton aria-label="add to favorites">
        <StarIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardContent>
  </Card>
  
  )
}

export default MovieListItem
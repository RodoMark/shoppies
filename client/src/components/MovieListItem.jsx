import React, { useState, useContext } from 'react'
import { Card, CardContent, Typography, Grid, IconButton} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/Share';
import NominationContext from '../context/NominationContext'

const MovieListItem = ({ movie }) => {
  const [nominated, setNominated] = useState(false)

  const thisMovie = {
    title: movie.Title,
    year: movie.Year,
    director: movie.Director,
  }

  // list of selected nominations
  const { stateNominations } = useContext(NominationContext)
  const [nominations, setNominations] = stateNominations
  
  export const removeNomination = (nomination) => {
    const isMatch = 
    nomination.title === thisMovie.title &&
    nomination.year === thisMovie.year &&
    nomination.director === thisMovie.director

    for(let i = 0; i < nominations.length; i++) {
      if(isMatch) {
        const newNominations = [...nominations.splice(i, 1)]
        return setNominations(newNominations)
      }
    }
  }

  const handleNomination = () => {
    if(!nominated) {
      setNominated(true)
      setNominations([...nominations, thisMovie])
    } else {
      setNominationed(false)
      removeNominations(thisMovie)
    }
  }

  return (
    <Card variant="outlined" item component={Card} xs={12} md={3} className={`movie-card ${nominated && 'movie-card--nominated'}`}>
    <CardContent>
      <Typography variant="header" gutterBottom>{`Title: ${thisMovie.Title}`}</Typography>
      <Typography variant="body2">Year: {thisMovie.Year}</Typography>
      <Typography variant="body2">Director: {thisMovie.Director}</Typography>
      <IconButton aria-label="add to favorites" onClick={()=> handleNomination}>
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
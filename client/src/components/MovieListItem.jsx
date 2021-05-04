import React, { useState, useContext } from 'react'
import { Card, CardContent, Typography, Grid, IconButton} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import ShareIcon from '@material-ui/icons/Share';

import { NominationContext } from '../context/NominationContext'

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
  
  const addNomination = (nomination) => {
    console.log("AND THE NOMINEE IS:", nomination)
    const newNominations = [...nominations].push(nomination)
    console.log("NOMINATION ADDED =>", newNominations)
    setNominations(newNominations)
  }

  const removeNomination = (nomination) => {
    const isMatch = 
    nomination.title === thisMovie.title &&
    nomination.year === thisMovie.year &&
    nomination.director === thisMovie.director

    for(let i = 0; i < nominations.length; i++) {
      if(isMatch) {
        const newNominations = [...nominations.splice(i, 1)]
        setNominations(newNominations)
        console.log("NOMINATION REMOVED =>", nominations)
        return 
      }
    }
  }

  const handleNomination = () => {
    if(!nominated) {
      setNominated(true)
      addNomination(thisMovie)
    } else {
      setNominated(false)
      removeNomination(thisMovie)
    }
  }

  return (
    <Card variant="outlined" item="true" component={Card} xs={12} md={3} className={`movie-card ${nominated && 'movie-card--nominated'}`}>
    <CardContent>
      <Typography variant="h3" gutterBottom>{`Title: ${thisMovie.title}`}</Typography>
      <Typography variant="body2">Year: {thisMovie.year}</Typography>
      <Typography variant="body2">Director: {thisMovie.director}</Typography>
      <IconButton aria-label="add to favorites" onClick={()=> handleNomination()}>
        {nominated ? <StarIcon /> : <StarOutlineOutlinedIcon />}
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardContent>
  </Card>
  
  )
}

export default MovieListItem
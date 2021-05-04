import React, { useState, useContext, useEffect } from 'react'
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

  const checkNominations = (nomination) => {
    if(nominations.length < 1) {
      return
    } else {
      const isMatch = 
        nomination.title === thisMovie.title &&
        nomination.year === thisMovie.year &&
        nomination.director === thisMovie.director

      for(let i = 0; i < nominations.length; i++) {
        if(isMatch) {
          return setNominated(true)
        }
      }
    }
  }

  useEffect(() => {
    checkNominations(thisMovie)
  }, [])
  
  const addNomination = (nomination) => {
    if(nominations.length < 1) {
      setNominations([nomination])
    } else {
      setNominations([...nominations, nomination])
    }
  }

  const removeNomination = (nomination) => {
    const isMatch = 
    nomination.title === thisMovie.title &&
    nomination.year === thisMovie.year &&
    nomination.director === thisMovie.director

    for(let i = 0; i < nominations.length; i++) {
      if(isMatch) {
        const newNominations = [...nominations].splice(i, 1)
        setNominations([...newNominations])
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
      <h3>{`Title: ${thisMovie.title}`}</h3>
      <h5>Year: {thisMovie.year}</h5>
      <h4 variant="body2">Directed by: {thisMovie.director}</h4>
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
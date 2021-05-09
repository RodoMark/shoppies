import React, {useState, useContext} from 'react'
import MovieInfo from './MovieInfo'
import { fetchSpecificMovie } from '../../api'
import { NominationContext } from '../../context/NominationContext'

// Removing disable-scroll until view-height bug can be resolved
// import disableScroll from 'disable-scroll';


const ResultCard = ( { movie } ) => {
  const { nominations, displayInfo, addNomination, removeNomination, showInfo, setMovie } = useContext(NominationContext)

  let nominationMatch = nominations.find(mov => mov.imdbID === movie.imdbID)

  const nominated = nominationMatch ? true : false

  const clickDisabled = nominations.length >= 5 ? true : false

  const handleClick = async () => {
    const result = await fetchSpecificMovie(movie.imdbID)
    // disableScroll.on()
    setMovie(result)
    showInfo()
    document.body.style.overflow = "initial"
  }

  return (
    <article className={`result-card movie-key-${movie.imdbID}`} >
      {displayInfo && <MovieInfo imdbID={movie.imdbID} />}
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        ) : (<div className="filler-poster"></div>)}
      </div>

      <div className="info">
        <div className="header" onClick={() => handleClick()}
>
          <h3 className="title"           >
            {movie.Title}
          </h3>
          <h4 className="year">{movie.Year ? movie.Year : 'na'}</h4>
          <a>More Info</a>
        </div>

        <div className="controls">
          {!nominated ? (
            <button 
              className="btn"
              onClick={(event) => {
                addNomination(movie)
                event.currentTarget.blur()
              }
            }
              disabled={clickDisabled}
            >Add Nomination</button>
          ) : (
            <button 
              className="btn"
              onClick={(event) => {
                removeNomination(movie.imdbID)
                event.currentTarget.blur()
                }
              }
            >Remove</button>
          )}
          
        </div>
      </div>
      
    </article>
  )
}

export default ResultCard
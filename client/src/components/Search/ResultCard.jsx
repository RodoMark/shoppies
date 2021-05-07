import React, {useContext} from 'react'
import { NominationContext } from '../../context/NominationContext'

const ResultCard = ( { movie } ) => {
  const { nominations, addNomination, removeNomination } = useContext(NominationContext)

  let nominationMatch = nominations.find(mov => mov.imdbID === movie.imdbID)

  const nominated = nominationMatch ? true : false

  const clickDisabled = nominations.length >= 5 ? true : false

  return (
    <article className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        ) : (<div className="filler-poster"></div>)}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="year">{movie.Year ? movie.Year : 'na'}</h4>
        </div>

        <div className="controls">
          {!nominated ? (
            <button 
              className="btn"
              onClick={() => addNomination(movie)}
              disabled={clickDisabled}
            >Add Nomination</button>
          ) : (
            <button 
              className="btn"
              onClick={() => removeNomination(movie.imdbID)}
            >Remove Nomination</button>
          )}
          
        </div>
      </div>
      
    </article>
  )
}

export default ResultCard
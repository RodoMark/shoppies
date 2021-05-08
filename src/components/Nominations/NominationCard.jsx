import React from 'react'
import CardControls from './CardControls'

const NominationCard = ({ movie, type }) => {
  
  return (
    <article className={`${type === 'small' ? 'nomination-card--small' : 'nomination-card'}`}>
      <div className="overlay"></div>
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        ) : (<div className="filler-poster"></div>)}
      </div>

      <CardControls movie={movie} />
      
    </article>
  )
}

export default NominationCard
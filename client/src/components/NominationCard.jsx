import React from 'react'

const NominationCard = ({ movie }) => {
  
  return (
    <article className="nomination-card">
      <div className="overlay"></div>
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        ) : (<div className="filler-poster"></div>)}
      </div>
      
    </article>
  )
}

export default NominationCard
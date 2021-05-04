import React from 'react'

const ResultCard = ( {movie} ) => {
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
          <button className="btn">Add To Nominations</button>
        </div>
      </div>
      
    </article>
  )
}

export default ResultCard
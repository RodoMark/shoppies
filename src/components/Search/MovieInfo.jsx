import React from 'react'

const MovieInfo = ({ movie }) => {
  return (
    <div className='overlay'>
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        ) : (<div className="filler-poster"></div>)}
      </div>
      <article className="movie-info">
        <div className="header">
            <h3 className="title">{`Title: ${movie.Title}`}</h3>
            <h3 className="metascore">{`Metascore: ${movie.Metascore || 'N/A'}` }</h3>
        </div>
        <div className="body">
            <h4 className="director">{`Director: ${movie.Director || 'N/A'}`}</h4>
            <h4 className="released">{`Released: ${movie.Released || 'N/A'}`}</h4>
            <h4 className="actors">{`Actors: ${movie.Actors || 'N/A'}`}</h4>
            <p className="plot">{`Plot: ${movie.Year || 'N/A'}`}</p>
        </div>             
      </article>
    </div>
  )
}

export default MovieInfo

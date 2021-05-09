import React, { useContext, useEffect, useState } from 'react'
import { NominationContext } from '../../context/NominationContext'
import HighlightOff from '@material-ui/icons/HighlightOff'

const MovieInfo = ({ imdbID }) => {
  const [loading, setLoading] = useState(false)

  const { hideInfo, setMovie, specificMovie } = useContext(NominationContext)

  //loading single movie object via imdbID
  
  return (
    <div className='overlay--movie-info'>
      <section className='splash splash--movie-info'>

        <article className="movie-info--detailed">
            
          <div className="header">
            <button 
                  className="close btn--control"
                  onClick={() => {
                    hideInfo()
                    document.body.style.overflow = "initial"
                  }
                }
                >
                  CLOSE <HighlightOff />
              </button>
              <h3 className="title">{`Title: ${specificMovie.Title}`}</h3>
              <h3 className="metascore">{`Metascore: ${specificMovie.Metascore || 'N/A'}` }
              </h3>
          </div>
          <div className="poster-wrapper">
          {specificMovie.Poster ? (
            <img src={specificMovie.Poster} alt={`${specificMovie.Title} Poster`}></img>
          ) : (<div className="filler-poster"></div>)}
          </div> 
          <div className="body">
              <h4 className="director">{`Director: ${specificMovie.Director || 'N/A'}`}</h4>
              <h4 className="released">{`Released: ${specificMovie.Released || 'N/A'}`}</h4>
              <h4 className="actors">{`Actors: ${specificMovie.Actors || 'N/A'}`}</h4>
          </div>
          <div className="plot">
          <p className="plot">{`Plot: ${specificMovie.Plot || 'N/A'}`}</p>
          </div>  
          
        </article> 
        
      </section>
    </div>
  )
}

export default MovieInfo

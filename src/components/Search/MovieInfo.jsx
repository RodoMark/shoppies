import React, { useContext } from 'react'
import InfoControls from './InfoControls'
import { NominationContext } from '../../context/NominationContext'
import HighlightOff from '@material-ui/icons/HighlightOff'

const MovieInfo = ({ movie }) => {
  const { hideInfo } = useContext(NominationContext)
  

  return (
    <div className='overlay--movie-info'>
      <section className='splash splash--movie-info'>

        <article className="movie-info--detailed">
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
          <div className="header">
              <h3 className="title">{`Title: ${movie.Title}`}</h3>
              <h3 className="metascore">{`Metascore: ${movie.Metascore || 'N/A'}` }
              </h3>
              
          </div>
          <div className="body">
              <h4 className="director">{`Director: ${movie.Director || 'N/A'}`}</h4>
              <h4 className="released">{`Released: ${movie.Released || 'N/A'}`}</h4>
              <h4 className="actors">{`Actors: ${movie.Actors || 'N/A'}`}</h4>
              <p className="plot">{`Plot: ${movie.Year || 'N/A'}`}</p>
          </div>  
          <div className="poster-wrapper">
          {movie.Poster ? (
            <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
          ) : (<div className="filler-poster"></div>)}
        </div>           
        </article> 
        
      </section>
    </div>
  )
}

export default MovieInfo

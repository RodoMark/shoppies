import React, { useContext, useEffect, useState } from 'react'
import InfoControls from './InfoControls'
import { fetchSpecificMovie } from '../../api'
import { NominationContext } from '../../context/NominationContext'
import HighlightOff from '@material-ui/icons/HighlightOff'

const MovieInfo = ({ imdbID }) => {
  const [specificMovie, setSpecificMovie] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await fetchSpecificMovie(imdbID)
        setResults(result)
        console.log(specificMovie)
        setLoading(false)
      } catch(error) {
        setResults([{Title: 'Error', Year: 'Data Currently Unavailable'}])
        
      }
      
    }

    callAPI()
  }, [title, year])

  const { hideInfo } = useContext(NominationContext)
  
  console.log("MOVIE DIRECTOR:", movie.Director)
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
              <h3 className="title">{`Title: ${movie.Title}`}</h3>
              <h3 className="metascore">{`Metascore: ${movie.Metascore || 'N/A'}` }
              </h3>
          </div>
          <div className="poster-wrapper">
          {movie.Poster ? (
            <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
          ) : (<div className="filler-poster"></div>)}
          </div> 
          <div className="body">
              <h4 className="director">{`Director: ${movie.Director || 'N/A'}`}</h4>
              <h4 className="released">{`Released: ${movie.Released || 'N/A'}`}</h4>
              <h4 className="actors">{`Actors: ${movie.Actors || 'N/A'}`}</h4>
          </div>
          <div className="plot">
          <p className="plot">{`Plot: ${movie.Plot || 'N/A'}`}</p>
          </div>  
          
        </article> 
        
      </section>
    </div>
  )
}

export default MovieInfo

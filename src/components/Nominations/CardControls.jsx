import React, { useContext } from 'react'
import { NominationContext } from '../../context/NominationContext'
import HighlightOff from '@material-ui/icons/HighlightOff'

const CardControls = ( { movie }) => {
  const { removeNomination } = useContext(NominationContext)

  return (
    <div className="inner-card-controls">
      <>
        <button 
          className="btn--control"
          onClick={() => removeNomination(movie.imdbID)}
        >
          <HighlightOff />
        </button>
      </>
    </div>
  )
}

export default CardControls
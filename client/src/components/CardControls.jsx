import React from 'react'
import HighlightOff from '@material-ui/icons/HighlightOff'

const CardControls = ( { movie }) => {
  return (
    <div className="inner-card-controls">
      <>
        <button className="btn--control">
          <HighlightOff />
        </button>
      </>
    </div>
  )
}

export default CardControls
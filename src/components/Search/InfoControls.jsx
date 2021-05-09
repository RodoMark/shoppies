import React, { useContext } from 'react'
import { NominationContext } from '../../context/NominationContext'
import HighlightOff from '@material-ui/icons/HighlightOff'

const InfoControls = () => {
  const { hideInfo } = useContext(NominationContext)

  return (
    <div className="inner-card-controls">
      <>
        <button 
          className="btn--control"
          onClick={() => hideInfo()}
        >
          <HighlightOff />
        </button>
      </>
    </div>
  )
}

export default InfoControls
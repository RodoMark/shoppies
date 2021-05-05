import React, { useContext } from 'react'
import { NominationContext } from '../../context/NominationContext'
import { useHistory } from 'react-router-dom'

const Submit = () => {
  const { clearNominations } = useContext(NominationContext)

  const history = useHistory()

  const handleClick = () => {
    clearNominations()
    history.push('/search')
  }
  return (
    <div className="container">
      <h1>Thank you for submitting your nominations!</h1>
      <h3>Wanna do it again?</h3>
      <button onClick={() => handleClick()} className="btn">
        Click Here!
      </button>
    </div>
  )
}

export default Submit
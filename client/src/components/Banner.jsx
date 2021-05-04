import React, {useState, useContext} from 'react'
import NominationContext from '../context/NominationContext'


const Banner = () => {
  const { stateNominations } = useContext(NominationContext)
  const [nominations, setNominations] = stateNominations
  

  return (
    <section className="banner">
      Please select {5 - nominations.length} more movies that you'd like to nominate.
    </section>
  )
  
}

export default Banner
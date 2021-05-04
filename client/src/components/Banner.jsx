import React, {useState, useContext} from 'react'
import { NominationContext } from '../context/NominationContext'


const Banner = () => {
  const { nominations } = useContext(NominationContext)
  

  return (
    <section className="banner">
      Please select {5 - nominations.length} more movies that you'd like to nominate.
    </section>
  )
  
}

export default Banner
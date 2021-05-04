import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { NominationContext } from '../../context/NominationContext'


const Banner = () => {
  const { nominations } = useContext(NominationContext)
  

  return (
    <section className="banner banner--complete">
      
      
    </section>
  )
  
}

export default Banner
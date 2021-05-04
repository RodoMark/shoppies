import React, {useState, useContext} from 'react'
import { NominationContext } from '../../context/NominationContext'
import { Link } from 'react-router-dom';


const Banner = () => {
  const { nominations } = useContext(NominationContext)
  

  return (
    <section className="banner banner--primary">
      {nominations.length < 5 ? `Please select ${5 - nominations.length} more movies that you'd like to nominate.` :
      `You have nominated 5 movies. You may now` }
      {nominations.length >= 5 && <Link to="/submit" className="btn">Submit</Link>}
      
    </section>
  )
  
}

export default Banner
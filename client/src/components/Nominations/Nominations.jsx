import React, { useContext } from 'react'
import { NominationContext } from '../../context/NominationContext'
import NominationCard from './NominationCard'


const Nominations = ({ cards }) => {
  const { nominations } = useContext(NominationContext)

  return (
    <section className="nomination-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Your Nominations</h1>
        </div>

        <div className="movie-grid">
          {nominations.length > 0 && nominations.map(movie => (
            <NominationCard type="large" key={movie.imdbID} movie={movie} />
          )) }
        </div>
         
      </div>
    </section>
     
  
  )
}

export default Nominations
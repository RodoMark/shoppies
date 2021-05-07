import React from 'react'
import { NominationContext } from '../../context/NominationContext'
import NominationCard from './NominationCard'

const NominationsSmall = ( { results }) => {
  const { nominations } = useContext(NominationContext)

  return (
    nominations.length > 0 ? 
    <div className="container">
      <ul className="results">
        {results.map(movie => (
          <li 
            key={movie.imdbID}
          >
            <NominationCard type="nomination-card--small" movie={movie} />
          </li>
        ))}
      </ul>
    </div> 
      
      : 
      
      null
  ) 
}

export default NominationsSmall
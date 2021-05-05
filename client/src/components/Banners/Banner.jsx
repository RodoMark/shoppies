import React, {useState, useContext} from 'react'
import { NominationContext } from '../../context/NominationContext'
import { useHistory } from 'react-router-dom';


const Banner = () => {
  const { nominations } = useContext(NominationContext)
  const history = useHistory();

  const handleClick = nominations.length >= 5 ? (() =>
    history.push('/submit')
  ) : (() =>
  history.push('/nominations'))

  return (
    <section onClick={handleClick} className={`btn banner ${nominations.length < 5 ? 'banner--danger' : 'banner--secondary'}`}>
      <div className="banner-content">
        {nominations.length < 5 ? `Please select ${5 - nominations.length} more that you'd like to nominate.` :
        `You have nominated 5 movies. Click here to submit` }
      </div>
      
      
    </section>
  )
  
}

export default Banner
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
    <section id="banner-standard" onClick={handleClick} className={`btn banner ${nominations.length < 5 ? 'banner--danger' : 'banner--confirm'}`}>
      <div className="banner-content">
        {nominations.length < 5 ? `${nominations.length}/5 NOMINATED` :
        `Click here to submit` }
      </div>
      
      
    </section>
  )
  
}

export default Banner
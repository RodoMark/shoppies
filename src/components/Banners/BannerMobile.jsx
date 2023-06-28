import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { NominationContext } from '../../context/NominationContext'


const BannerMobile = () => {
  const { nominations } = useContext(NominationContext)
  const history = useHistory();

  const handleClick = nominations.length >= 5 ? (() =>
    history.push('/submit')
  ) : (() =>
  history.push('/search'))

  return (
    <section id="banner-mobile" onClick={handleClick} className={`btn banner ${nominations.length < 5 ? 'banner--danger' : 'banner--confirm'}`}>
      <div id="banner-text" className="banner-content">
        {nominations.length < 5 ? `${nominations.length}/ 5 nominations selected` :
        `Click here to submit` }
      </div>
    </section>
  )
  
}

export default BannerMobile
import React from 'react'
import { useMedia } from 'react-media'

import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'


const Header = () => {
  const isSmallScreen = useMedia({ query: "(max-width: 770px)" });

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          {isSmallScreen ? <MobileNavbar /> : <Navbar />}
        </div>
      </div>
    </header>
  )
}

export default Header
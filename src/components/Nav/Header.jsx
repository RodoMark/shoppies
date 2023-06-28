import React from 'react'
import { useMedia } from 'react-media'

import Navbar from './Navbar'
import MobileNavbar from './NavbarMobile'


const Header = () => {
  const isSmallScreen = useMedia({ query: "(max-width: 770px)" });

  return (
    <header>
        <div className="inner-content">
          {isSmallScreen ? <MobileNavbar /> : <Navbar />}
      </div>
    </header>
  )
}

export default Header

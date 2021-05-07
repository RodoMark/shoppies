import React from 'react'
import { useMedia } from 'react-media'

import Navbar from './Navbar'
import MobileNavbar from './NavbarMobile'
import Banner from '../Banners/Banner'
import BannerMobile from '../Banners/BannerMobile'


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
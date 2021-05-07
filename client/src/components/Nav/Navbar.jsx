import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../Banners/Banner'

const Navbar = () => {
  return (
    <nav id="navbar-standard">

    <div>
      <ul className="nav-links">
        <li>
          <Link to="/">Shoppies</Link>
        </li>
        <li>
          <Banner />
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/nominations">Nominations</Link>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
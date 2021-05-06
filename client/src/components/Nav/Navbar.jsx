import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../Banners/Banner'

const Navbar = () => {
  return (
    <>
    <div className="brand">
      <Link to="/">Shoppies</Link>
    </div>
    <nav>
      <ul className="nav-links">
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
    </nav>
    </>
  )
}

export default Navbar
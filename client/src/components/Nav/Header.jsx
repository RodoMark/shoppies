import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Shoppies</Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/search" className="btn">Search</Link>
              </li>
              <li>
                <Link to="/nominations">Your Nominations</Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
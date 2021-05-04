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
                <Link to="/">Shoppies</Link>
              </li>
              <li>
                <Link to="/nominations">My Nominations</Link>
              </li>
              <li>
                <Link to="/add" className="btn">+ Add</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
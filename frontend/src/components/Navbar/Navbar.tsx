import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <div className='nav-container'>
        <Link to='/'>
          <h1>Flight Search</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar;

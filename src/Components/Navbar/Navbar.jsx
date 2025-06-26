import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Raviraj M.</h1>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>
        <div className='myresume'>MY Resume</div>
    </div>
  )
}

export default Navbar
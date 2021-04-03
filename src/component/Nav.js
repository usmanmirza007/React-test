import React from 'react'
import logo from './../images/logo.png'
const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbarContainer'>
          <ul className='navbarLeft'>
            <div className='navbarLeftLogo'>
              <img src={logo} alt="logo" />
            </div>
          </ul>
          <ul className='navbarRight'>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav

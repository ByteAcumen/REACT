import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="empty"></div>
        <div className="element">
          <a href="">Home</a>
          <a href="">Why Eatfit?</a>
          <a href="">Visit EatFit</a>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </div>
  )
}

export default Navbar

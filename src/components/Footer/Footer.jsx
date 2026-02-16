import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <FontAwesomeIcon icon={faPaw} className="footer-paw" />
        <h1>Eatfit</h1>
      </div>
      <div className="footer-line"></div>
      <h2>Follow Us</h2>
      <div className="footer-icons">
        <div className="icon-box">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </div>
  )
}

export default Footer;
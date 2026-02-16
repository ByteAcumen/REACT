import React from 'react'
import './Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Title = () => {
  return (
    <div className="title-container">
      <FontAwesomeIcon icon={faPaw} className="paw-icon" />
      <h1 className="title">Eatfit Blog</h1>
    </div>
  )
}

export default Title

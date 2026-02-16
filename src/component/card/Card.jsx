import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <div className="img">
        <img src="https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500" alt="image" />
      </div>
      <div className="title">Paratha Love: Unveiling the Magic of Stuffed Flatbreads</div>
      <div className="description">
        The very mention of "paratha" can bring about a sense of homesickness unlike no other. The taste, the feeling and the sheer fulfilment of the
      </div>
      <div className="read-more">READ MORE »</div>
      <div className="date">December 21, 2023 • No Comments</div>
    </div>
  )
}

export default Card
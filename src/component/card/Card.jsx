import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <div className="img">
        <img src="https://blog.eatfit.in/wp-content/uploads/2023/12/delicious-assortment-traditional-roti-768x513.jpg" alt="image" />
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
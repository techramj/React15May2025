import React from 'react'

const Card = (props) => {
  return (
    <div className={`box ${props.type}`}>
      <p className='title'>Lorem ipsum dolor sit.</p>
      <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis nulla reprehenderit nam beatae, quod ex amet alias eaque dolore molestias rem corrupti minus quibusdam veniam sunt eum, aperiam vel.</p>
    </div>
  )
}

export default Card;

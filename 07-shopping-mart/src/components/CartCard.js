import React from 'react';
import "./CartCard.css"; // Assuming you have a CSS file for styling 

export const CartCard = ({product}) => {
   const {name,price,image} = product;
  return (
    <div className='cartCard'>
      <img src={image} alt={name} /> {image}
      <p className='productName'>{name}</p> 
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  )
}


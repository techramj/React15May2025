
import { useCart } from "../context/CartContext";
import "./ProductCard.css"

export const ProductCard = ({product}) => {
  const {name, price, image} = product;
  const { addToCart } = useCart();

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className='action'>
        <p className='name'>${price}</p>
        <button onClick = {()=> addToCart(product)} >Add to Cart</button>
      </div>
    </div>
  )
}


import "./ProductCard.css"

export const ProductCard = ({product}) => {
  const {name, price, image} = product;

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className='action'>
        <p className='name'>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

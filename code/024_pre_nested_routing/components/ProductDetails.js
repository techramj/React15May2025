import { useParams, useSearchParams } from "react-router-dom"


const ProductDetails = () => {

  const param = useParams();
  const [queryParams] = useSearchParams()

  console.log(param);

  
  return (
    <div>
      <h1>Product Details </h1>
      <span>Product id: {param.id}</span>
      <p>quantity: {queryParams.get('qty')}</p>
      <p>size: {queryParams.get('size')}</p>
    </div>
  )
}

export default ProductDetails

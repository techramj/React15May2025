import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  function handleSubmit(){
    console.log('Product Details Submitted');
    //redirect to product details page
    // window.location.href = '/product-details';

    navigate('/products/1000'); // This will change the URL to /contact and render the Contact component
  }

  return (
    <div>
      <div>
      <button onClick={handleSubmit} >Display Details</button>
    </div>
    </div>
  )
}

export default ProductList

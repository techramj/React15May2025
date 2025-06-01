import React from 'react'
import {ProductCard} from '../components';

export const Home = () => {
    
   const products = [
    {id: 1, name: 'Apple pro Headphone', price: 200, image: '/images/1001.webp'},
    {id: 2, name: 'Beat 001H Bluetooth Headphone', price: 50, image: '/images/1002.webp'},
    {id: 3, name: 'JBL 012H Bluetooth Headphone', price: 100, image: '/images/1003.webp'},
    {id: 4, name: 'JBL Pro 102X', price: 30, image: '/images/1004.webp'},
    {id: 5, name: 'Noise 12WE PRO', price: 120, image: '/images/1005.webp'},
    {id: 6, name: 'SONY WH-CH520 Bluetooth Wireless', price: 150, image: '/images/1006.jpeg'},
   ];

  return (
    <main>
      <section className='products'>
         {products.map((product) => (
          <ProductCard key={product.id} product={product} />  
         ))}
      </section>
    </main>
  )
}


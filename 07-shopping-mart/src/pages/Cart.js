import React from 'react';
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
    useTitle("Cart");
    const products = [
        {id: 3, name: 'JBL 012H Bluetooth Headphone', price: 100, image: "/assets/1001.webp"},
    {id: 4, name: 'JBL Pro 102X', price: 30, image: '/assets/images/1004.webp'}
    ];
  return (
    <main>
        <section className='cart'>
            <h1>Cart Items:{products.length}</h1>
            {products.map((p) => (
                <CartCard key= {p.id} product={p} ></CartCard>
            ))}
        </section>
    </main>
  )
}

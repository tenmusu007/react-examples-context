import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../useContxt/useCartContxt';
export default function Navbar() {
  const { cart, setCart } = useContext(cartContext)

  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
        <h2>Cart</h2>
        <h2>{cart.length}</h2>
      </div>
    </div>
  );
}

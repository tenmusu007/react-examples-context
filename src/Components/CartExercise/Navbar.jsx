<<<<<<< HEAD
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Navbar() {
  const { cartList } = useContext(CartContext);
=======
import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Navbar() {
  const { state } = useContext(CartContext);
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
        <h2>Cart</h2>
<<<<<<< HEAD
        <h2>{cartList.length}</h2>
=======
        <h2>{state.cart.length}</h2>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      </div>
    </div>
  );
}

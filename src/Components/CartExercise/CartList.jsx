<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../../useContxt/useCartContxt';

export default function CartList() {
  const { cart, setCart } = useContext(cartContext)
  const pTotal = cart.map((value) => {
    return value.product.price
  }, 0)
  const handlerDelete = (e) => {
    const deletedItem = cart.filter((product) => {
      if (product !== e) {
        return product
      }
    })
    setCart(deletedItem)
  }
  // console.log(cart);
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>
        {cart.map((product, index) => {
          return (
            <li style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }} key={index}>
              <span>{product.product.title}</span>
              <span>${product.product.price}</span>
              <span>{product.count}</span>
              <button onClick={() => handlerDelete(product)}>delete</button>
            </li>
          )
        })}
      </ul>
      Total:$ {pTotal.reduce((a, b) => {
        return a + b
      }, 0)}
=======
import React, {useContext} from 'react';
      import {CartContext} from './CartContext';
      import CartItem from './CartItem';
      export default function CartList() {
  const {cartList, calculateTotal} = useContext(CartContext);
  const parseCartList = cartList.map((item) => <CartItem item={item} />);
      return (
      <div className='component'>
        <h1>Cart list</h1>
        <ul>{parseCartList}</ul>
        Total: ${calculateTotal()}
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
      </div>
      );
}

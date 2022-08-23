import React from 'react';
import { useContext } from 'react';
<<<<<<< HEAD
import { Button } from '../../stories/Button';
import { CartContext } from './CartContext';

export default function Product(props) {
  const { product } = props;
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    addToCart(product);
=======
import { CartContext } from './CartContext';
import { ADD_TO_CART } from './actions';

export default function Product(props) {
  const { product } = props;
  const { dispatch } = useContext(CartContext);
  const handleClick = () => {
    // addToCart(product);
    // action = {type:ADD_TO_CART, payload:{product}}
    dispatch({ type: ADD_TO_CART, payload: product });
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  };
  return (
    <div className='component'>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt=''
        style={{ width: '100%', height: '300px' }}
      />
      <h2>Price: ${product.price}</h2>
      <p>{product.description}</p>
<<<<<<< HEAD
      {/* <button onClick={handleClick}>Add to cart</button> */}
      <Button label={"!!"} backgroundColor="orange" onClick={handleClick } />
=======
      <button onClick={handleClick}>Add to cart</button>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    </div>
  );
}

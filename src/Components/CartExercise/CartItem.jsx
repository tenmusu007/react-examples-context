import React from 'react';
import { useContext } from 'react';
<<<<<<< HEAD
// import { Button } from '../../stories/Button';
import { CartContext } from './CartContext';

export default function CartItem(props) {
  const { item } = props;
  const { removeItem } = useContext(CartContext);
  const handleClick = () => {
    removeItem(item.id);
  };
  return (
    <div>
      <li style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
        <div>
          <button onClick={handleClick}>X</button>
          {/* <Button /> */}
          <span>{item.title}</span>
        </div>
        <span>${item.price}</span>
      </li>
    </div>
=======
import { REMOVE_ITEM } from './actions';
import { CartContext } from './CartContext';

export default function CartItem(props) {
  const { dispatch } = useContext(CartContext);
  const { item } = props;
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div>
        <button
          onClick={() => dispatch({ type: REMOVE_ITEM, payload: item.id })}>
          X
        </button>
        <span>{item.title}</span>
      </div>
      <span>{item.quantity}</span>
      <span>${item.price}</span>
    </li>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  );
}

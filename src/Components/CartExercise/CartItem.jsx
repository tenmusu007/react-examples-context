import React from 'react';
import { useContext } from 'react';
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
  );
}

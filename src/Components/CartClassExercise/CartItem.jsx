import React, { Component } from 'react';
<<<<<<< HEAD
import { CartContext } from './CartContext';
import ButtonCart from './ButtonCart';
=======
import Button from './Button';
import { CartContext } from './CartContext';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr 2fr 2fr',
          backgroundColor: 'white',
          alignItems: 'center',
          padding: '.5rem .3rem',
          gap: '.5rem',
        }}>
<<<<<<< HEAD
        <ButtonCart
          label=''
          type='remove'
          onClick={() =>
            this.context.dispatch({ type: 'REMOVE_ITEM', payload: item.id })
          }>
          X
        </ButtonCart>
=======
        <Button
          label=''
          type='remove'
          onClick={() => this.context.removeItem(item.id)}>
          X
        </Button>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
        <span>{item.title}</span>

        <span>{item.quantity}</span>
        <span>${item.price.toFixed(2)}</span>
      </li>
    );
  }
}
CartItem.contextType = CartContext;

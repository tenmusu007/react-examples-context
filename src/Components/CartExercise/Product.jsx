import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../useContxt/useCartContxt';

export default function Product(props) {
  const { cart, setCart } = useContext(cartContext)
  // console.log(cart);
  // console.log(cart.count);
  const handlerCart = (e) => {
    console.log("seletected",e);
    // const dubble = cart.find(e => e.product.title === cart[0].product.title)
    const dubble = cart.filter((data) => {
      if (data.product.title === e.product.title) {
        return data
      }
    })
    console.log("dubble",cart);
    console.log(e.product.id);
    // if (dubble) {
    //   const num = cart[cart.length - 1].count + 1
    //   // cart.()
    //   setCart([...cart,{...e, count: num } ])
    // } else {
    // }
    // const uniqueUsers = cart.from(
    //   new Map(cart.map((product) => [product.product.title, product])).values()
    // );
    // console.log(uniqueUsers);
    const uniqueItemUseES2015 = cart.filter((item, index, array) => {
      return array.findIndex(item2 => item.title === item2.title) === index;
    });
    console.log(uniqueItemUseES2015);
    setCart([...cart, {...e, count : dubble.length > 0 ? dubble.length + 1 : 1}])
    
  // else {
  // }
  }

  return (
    <div className='component'>
      <h1>{props.product.title}</h1>
      <img src={props.product.image} alt='' style={{ width: '100%', height: '300px' }} />
      <h2>Price: {props.product.price }</h2>
      <p>{props.product.description}</p>
      <button onClick={()=>handlerCart(props)}>Add to cart</button>
    </div>
  );
}

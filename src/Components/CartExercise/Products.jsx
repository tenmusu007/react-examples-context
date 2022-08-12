import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';

export default function Products() {
  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res =>setData(res.data))
  },[])
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {data.map((data,index) => {
          return(
            <Product
              key={index}
              product={{
                title: data.title,
                price: data.price,
                image: data.image,
                description: data.description,
              }}
            />
          )
        })}
        
      </section>
    </div>
  );
}

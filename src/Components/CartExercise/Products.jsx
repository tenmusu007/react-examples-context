import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxios from '../CustomHook/hooks/useAxios';
import Product from './Product';

export default function Products() {
<<<<<<< HEAD
=======
  const [productList, setProductList] = useState([]);
  const { data } = useAxios('https://fakestoreapi.com/products', 'get', null);
  useEffect(() => {
    console.log('data products', data);
    setProductList(data);
  }, []);
  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then((response) => setProductList(response.data));
  // }, []);
  const parseProductList = productList
    ? productList.map((product) => (
        <Product product={product} key={product.id} />
      ))
    : [];
>>>>>>> e4df40ec364d1a670e73b3d9d9be7baf105be2ed
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
      </section>
    </div>
  );
}

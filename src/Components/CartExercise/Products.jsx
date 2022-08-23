import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxios from '../CustomHook/hooks/useAxios';
import Product from './Product';

export default function Products() {
<<<<<<< HEAD
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
=======
  // const [products, setProducts] = useState([]);
  const { data } = useAxios('https://fakestoreapi.com/products/');
  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products/')
  //     .then((response) => setProducts(response.data));
  // }, []);
  const parseProducts = data.map((product) => (
    <Product product={product} key={product.id} />
  ));
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
<<<<<<< HEAD
        {parseProductList}
=======
        {parseProducts}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      </section>
    </div>
  );
}

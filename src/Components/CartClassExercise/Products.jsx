import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      anotherProp: 'prop',
    };
  }
  componentDidMount() {
    axios
      .get('https://fakestoreapi.com/products/')
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    console.log('products', this.state.products);
    const parseProducts = this.state.products.map((product) => (
      <Product product={product} key={product.id} />
    ));
    return (
      <div className='component'>
        <h1>Product list</h1>
        <section
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {parseProducts}
        </section>
      </div>
    );
  }
}

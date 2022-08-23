<<<<<<< HEAD
import axios from 'axios';
import React, { Component } from 'react';
=======
import React, { Component } from 'react';
import axios from 'axios';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
import Product from './Product';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
<<<<<<< HEAD
=======
      anotherProp: 'prop',
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    };
  }
  componentDidMount() {
    axios
<<<<<<< HEAD
      .get('https://fakestoreapi.com/products')
      .then((response) => this.setState({ products: [...response.data] }));
  }
  render() {
    const parseProductList = this.state.products.map((product) => (
=======
      .get('https://fakestoreapi.com/products/')
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    const parseProducts = this.state.products.map((product) => (
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      <Product product={product} key={product.id} />
    ));
    return (
      <div>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '1rem',
          }}>
<<<<<<< HEAD
          {parseProductList}
=======
          {parseProducts}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
        </section>
      </div>
    );
  }
}

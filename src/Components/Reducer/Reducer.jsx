import React from 'react';
import Child from './Child';
import { CounterProvider } from './CounterContext';
import Sibling from './Sibling';

export default function Reducer() {
  return (
<<<<<<< HEAD
    <div className='component'>
=======
    <div className='component' style={{ display: 'flex', width: '100%' }}>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      <h1>Reducer</h1>
      <CounterProvider>
        <Child />
        <Sibling />
      </CounterProvider>
    </div>
  );
}

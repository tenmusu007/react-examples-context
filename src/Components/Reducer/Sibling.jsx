import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

export default function Sibling() {
  const { state } = useContext(CounterContext);
  return (
    <div className='component'>
      <h1>Sibling</h1>
<<<<<<< HEAD
      <h2>Counter: {state.counter}</h2>
=======
      <h2>Counter: {state.count}</h2>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    </div>
  );
}

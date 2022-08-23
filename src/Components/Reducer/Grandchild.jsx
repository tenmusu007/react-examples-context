import React, { useContext, useState } from 'react';
import { CounterContext } from './CounterContext';

export default function Grandchild() {
  const { dispatch } = useContext(CounterContext);
  const [input, setInput] = useState(1);
  return (
    <div className='component'>
      <h1>Grandchild</h1>
<<<<<<< HEAD
      <div>
        <input
          type='number'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: 'increment', payload: Number(input) })
          }>
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'decrement', payload: Number(input) })
          }>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
=======
      <input
        type='number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: 'increment', payload: Number(input) })}>
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement', payload: Number(input) })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    </div>
  );
}

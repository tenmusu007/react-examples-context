import React from 'react';
<<<<<<< HEAD
import Main from './Main';
import store from './store';
import { Provider } from 'react-redux';

export default function Redux() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Main />
      </div>
    </Provider>
=======
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice';

export default function Redux() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 5
      </button>
    </div>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  );
}

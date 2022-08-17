# Redux

## What is Redux?

- JS library - State management
- Can be used with React, Angular, Vue, etc.
- Solve the problem of complex state
- Better solution for passing props to not related components
- Alternative to Context API + useReducer Hook

## Parts of Redux

- Store - Global state (Similar to Context)

```js
let store = createStore(counter);
```

- Actions - Functions that returns an object

```js
const increment = () => {
  return {
    type: 'increment',
  };
};
```

- Reducer - Function that returns the new state value, depending on the type received as parameter

```js
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

store.subscribe(() => console.log('state changed', store.getState()));
```

- Dispatch - Function that receives one of the actions as parameter to be executed

```js
store.dispatch(increment());
```

## File Structure

- src/store/actions
- src/store/reducers
  - index.js
  - counter.js
  - isLogged.js

## Multiple reducers

```js
// src/reducers/index.js
import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
```

```js
// index.js
import allReducers from './reducers/index';
const store = createStore(allReducers);
```

## Redux DevTools Extension

```js
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## Provider

```jsx
import { Provider } from 'react-redux';
<Provider store={store}>
  <App />
</Provider>;
```

## Redux Hooks

### useSelector

Function that access a specific property of the state.

```js
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className='App'>
      <h1>Counter : {counter} </h1>
      <h1>Is Logged : {isLogged} </h1>
    </div>
  );
}
```

### useDispatch

Function that executes one of the actions.

```js
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter : {counter} </h1>
      <h1>Is Logged : {isLogged} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

## Exercise

Create a Todo list using Redux.

- User must be able to add new task.
- User must be able to delete existing task.

```
Todo List<h1>

<form>
    Task<input>
    Submit<button>
</form>
TaskList<ul>
    TaskItem<li>
</ul>
```

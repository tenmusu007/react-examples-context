import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from './counterSlice';
import loggedReducer from './loggedSlice';
=======
import counterReducer from './slices/counterSlice';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e

export default configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
    logged: loggedReducer,
=======
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  },
});

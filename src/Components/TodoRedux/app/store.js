import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import todoReducer from '../features/todoSlice';
=======
import todoReducer from '../features/todo/todoSlice';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});

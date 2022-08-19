import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
// import loggedReducer from './loggedSlice';
import taskSliceReducer from './taskSlice'

export default configureStore({
	reducer: {
		// counter: counterReducer,
		// logged: loggedReducer,
		task: taskSliceReducer,
	},
});

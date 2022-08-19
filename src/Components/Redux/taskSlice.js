import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
	name: "task",
	initialState: {
		value: []
	},
	reducers: {
    create: (state,action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task,index) => {
        if (index !== action.payload) {
          return task
        }
      })
    }
	},
});

export const { create, deleteTask } = taskSlice.actions
export default taskSlice.reducer
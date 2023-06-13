import { configureStore } from '@reduxjs/toolkit';
import fetchTodoReducer from "./slices/fetchTodoSlice";

export const store = configureStore({
  reducer: {
    todo: fetchTodoReducer,
  },
})
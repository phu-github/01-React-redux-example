import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Declare action async
export const fetchTodoThunk = createAsyncThunk(
    'todos/fetchTodo',
    async () => {
        console.log("Action====: todos/fetchTodo");
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                               . then(response => response.json());
      
        console.log("respose ====:", response);
        return response;
    }
);

const initialState = {
  todoList: [],
  status: 'pending'
}

export const fetchTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    resetTodoList: (state, action) => {
      state.todoList = [];
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchTodoThunk.pending, (state, action) => {
        state.todoList = action.payload;
        state.status = 'pending';
      })
      .addCase(fetchTodoThunk.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchTodoThunk.rejected, (state, action) => {
        state.todoList = action.payload;
        state.status = 'rejected';
      })
  },
})

// Action creators are generated for each case reducer function
export const { setTodoList, resetTodoList } = fetchTodoSlice.actions;

export default fetchTodoSlice.reducer;

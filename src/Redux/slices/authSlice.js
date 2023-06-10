import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true
    },
    logOut: (state) => {
      state.isLogin = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
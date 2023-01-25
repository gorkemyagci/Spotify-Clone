import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') ?? null,
  user: JSON.parse(localStorage.getItem('user')) ?? false
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
        localStorage.setItem('token',action.payload)
        state.token = action.payload
    },
    setUser: (state,action) => {
      localStorage.setItem('user',JSON.stringify(action.payload));
      state.user = action.payload;
      console.log(state.user);
    },
    logout: (state) => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      state.token = null
      state.user = false
    }
  },
})


export const { login, setUser, logout } = auth.actions

export default auth.reducer
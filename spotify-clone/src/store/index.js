import { configureStore } from '@reduxjs/toolkit'
import player from './player'
import auth from './auth'

export const store = configureStore({
  reducer: {
    player,
    auth
  },
})
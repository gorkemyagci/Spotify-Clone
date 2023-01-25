import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sideBar: false
}

export const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state,action) => {
        state.current = action.payload
    },
    setControls: (state,action) => {
        state.controls = action.payload
    },
    setPlaying: (state,action) => {
        state.playing = action.payload
    },
    setSidebar: (state,action) => {
        state.sideBar = action.payload
    }
  },
})


export const { setCurrent, setControls, setPlaying, setSidebar } = player.actions

export default player.reducer
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  open: boolean
}

const initialState: CounterState = {
  open: true
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.open = !state.open
    }
  }
})

export const { toggleMenu } = menuSlice.actions

export default menuSlice.reducer

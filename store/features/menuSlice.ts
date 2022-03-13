import { createSlice } from '@reduxjs/toolkit'

export interface IMenuState {
  open: boolean
}

const initialState: IMenuState = {
  open: false
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

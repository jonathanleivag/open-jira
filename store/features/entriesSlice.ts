import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  entries: [] // TODO: falta el tipo de datos
}

const initialState: CounterState = {
  entries: []
}

export const menuSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {}
})

// export const {} = menuSlice.actions

export default menuSlice.reducer

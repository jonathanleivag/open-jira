import { configureStore } from '@reduxjs/toolkit'
import { menuReducer, entriesReducer } from './features/'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    entries: entriesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

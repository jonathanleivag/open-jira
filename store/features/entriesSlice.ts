import { createSlice } from '@reduxjs/toolkit'
import { EntryInterface } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'

export interface CounterState {
  entries: EntryInterface[]
}

const initialState: CounterState = {
  entries: [
    {
      id: uuidv4(),
      description:
        'Anim laborum exercitation elit Lorem deserunt sit laboris enim duis.',
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description:
        'Pariatur magna eiusmod veniam laboris sint aute commodo non cupidatat officia.',
      status: 'in-progress',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description: 'Ipsum aute eu labore minim incididunt occaecat culpa.',
      status: 'finished',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ]
}

export const menuSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {}
})

// export const {} = menuSlice.actions

export default menuSlice.reducer

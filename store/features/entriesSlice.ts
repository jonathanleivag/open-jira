import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntryInterface } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { StatusType } from '../../types/statusType'

export interface IEntriesState {
  entries: EntryInterface[]
  dragging: boolean
}

export interface IEntryPayload {
  status: StatusType
  description: string
}

const initialState: IEntriesState = {
  entries: [
    {
      id: uuidv4(),
      description:
        'pendiente: Anim laborum exercitation elit Lorem deserunt sit laboris enim duis.',
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description:
        'pendiente: Anim laborum exercitation elit Lorem deserunt sit laboris enim duis.',
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description:
        'En progreso: Pariatur magna eiusmod veniam laboris sint aute commodo non cupidatat officia.',
      status: 'in-progress',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description:
        'finalizado: Ipsum aute eu labore minim incididunt occaecat culpa.',
      status: 'finished',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: uuidv4(),
      description:
        'finalizado: Ipsum aute eu labore minim incididunt occaecat culpa.',
      status: 'finished',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ],
  dragging: false
}

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    newEntryAction: (state, action: PayloadAction<IEntryPayload>) => {
      const { status, description } = action.payload
      const newEntry: EntryInterface = {
        id: uuidv4(),
        description,
        status,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      state.entries = [newEntry, ...state.entries]
    },
    draggingAction: (state, action: PayloadAction<boolean>) => {
      state.dragging = action.payload
    }
  }
})

export const { newEntryAction, draggingAction } = entriesSlice.actions

export default entriesSlice.reducer

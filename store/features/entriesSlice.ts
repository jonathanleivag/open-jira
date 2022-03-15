import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { EntryInterface } from '../../interfaces'
import { StatusType } from '../../types/statusType'
import { entriesApi } from '../../api'

export interface IEntriesState {
  entries: EntryInterface[]
  dragging: boolean
}

export interface IEntryPayload {
  status: StatusType
  description: string
}

export interface IEntryUpdatePayload {
  id: string
  status: StatusType
  description?: string
}

const initialState: IEntriesState = {
  entries: [],
  dragging: false
}

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    newEntryAction: (state, action: PayloadAction<EntryInterface>) => {
      state.entries = [action.payload, ...state.entries]
    },
    draggingAction: (state, action: PayloadAction<boolean>) => {
      state.dragging = action.payload
    },
    updateEntryAction: (state, action: PayloadAction<IEntryUpdatePayload>) => {
      const { id, status } = action.payload
      const entry = state.entries.find(entry => entry.id === id)
      if (entry) {
        entry.updatedAt = Date.now()
        entry.status = status
      }
    },
    setEntries: (state, action: PayloadAction<EntryInterface[]>) => {
      state.entries = action.payload
    }
  }
})

export const {
  newEntryAction,
  draggingAction,
  updateEntryAction,
  setEntries
} = entriesSlice.actions

export const getEntries = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await entriesApi.get<EntryInterface[]>('/entries')
    dispatch(setEntries(data))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export const createEntry = ({ description, status }: IEntryPayload) => async (
  dispatch: Dispatch
) => {
  try {
    const { data } = await entriesApi.post<EntryInterface>('/entries', {
      description,
      status
    })

    dispatch(
      newEntryAction({
        status: data.status,
        description: data.description,
        id: data.id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      })
    )
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export const updateEntry = ({
  id,
  status,
  description
}: IEntryUpdatePayload) => async (dispatch: Dispatch) => {
  try {
    await entriesApi.put(`/entries/${id}`, { status, description })
    dispatch(updateEntryAction({ id, status, description }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default entriesSlice.reducer

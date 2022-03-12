import { StatusType } from '../types'

export interface EntryInterface {
  id: string
  description: string
  status: StatusType
  createdAt: number
  updatedAt: number
}

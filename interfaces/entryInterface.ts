import { statusType } from '../types'

export interface EntryInterface {
  id: string
  description: string
  status: statusType
  createdAt: number
  updatedAt: number
}

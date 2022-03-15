import mongoose from 'mongoose'
import { db } from '.'
import { EntryInterface } from '../interfaces'
import { EntryModel } from '../models'

export const getEntryById = async (
  id: string
): Promise<EntryInterface | null> => {
  let resp = null

  if (!mongoose.isValidObjectId(id)) {
    resp = null
  } else {
    await db.connect()
    const entry = await EntryModel.findById(id).lean()

    resp = JSON.parse(JSON.stringify(entry))
    await db.disconnect()
  }
  return resp
}

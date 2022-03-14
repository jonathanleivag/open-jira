import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { EntryInterface } from '../../../interfaces'
import EntryModel from '../../../models/EntryModel'

type Data = { message: string } | EntryInterface

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es valido' })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res)
    case 'GET':
      return getEntry(req, res)

    default:
      return res.status(400).json({ message: 'Metodo no valido' })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  const entryToUpdate = await EntryModel.findById(id)

  if (!entryToUpdate) {
    await db.disconnect()
    return res.status(400).json({ message: 'La entrada no existe' })
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body as EntryInterface

  try {
    const updatedEnty = await EntryModel.findByIdAndUpdate(
      id,
      {
        description,
        status,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    )
    await db.disconnect()
    return res.status(200).json(updatedEnty!)
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({ message: 'Error en actualizar' })
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  const entry = await EntryModel.findById(id)

  if (!entry) {
    await db.disconnect()
    return res.status(400).json({ message: 'La entrada no existe' })
  }

  await db.disconnect()
  res.status(200).json(entry)
}

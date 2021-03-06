import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { EntryInterface } from '../../../interfaces'
import { EntryModel } from '../../../models'

type Data = { message: string } | EntryInterface[] | EntryInterface

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res)
    case 'POST':
      return postEntry(req, res)
    default:
      return res.status(400).json({ message: 'Endpoint no existe' })
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect()
  const entries = await EntryModel.find().sort({ updatedAp: -1 })
  await db.disconnect()
  res.status(200).json(entries)
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description, status } = req.body as EntryInterface
  const newEntry = new EntryModel({
    description,
    status,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  try {
    await db.connect()
    await newEntry.save()
    await db.disconnect()
    res.status(201).json(newEntry)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    await db.disconnect()
    res.status(500).json({ message: 'Error al crear la entrada' })
  }
}

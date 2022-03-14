import mongoose, { Model, Schema } from 'mongoose'
import { EntryInterface } from '../interfaces'

const entrySchema = new Schema(
  {
    description: { type: String, required: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['pending', 'in-progress', 'finished'],
        message:
          'El estado debe ser uno de los siguientes: pending, in-progress, finished'
      }
    }
  },
  { versionKey: false }
)

entrySchema.method('toJSON', function () {
  const { _id, ...rest } = this.toObject()
  return { id: _id, ...rest }
})

const EntryModel: Model<EntryInterface> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel

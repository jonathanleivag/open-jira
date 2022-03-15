import mongoose from 'mongoose'

export interface IDB {
  isConnected: mongoose.ConnectionStates
}

const mongoConnection: IDB = {
  isConnected: 0
}

export const connect = async () => {
  if (mongoConnection.isConnected > 0) {
    // eslint-disable-next-line no-console
    console.log('Ya estabamos conectados')
    return
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState

    if (mongoConnection.isConnected === 1) {
      // eslint-disable-next-line no-console
      console.log('Usando la conexion anterior')
      return
    }

    await mongoose.disconnect()
  }
  await mongoose.connect(process.env.MONGO_URL || '')
  mongoConnection.isConnected = 1
  // eslint-disable-next-line no-console
  console.log('Conectado a mongodb  ', process.env.MONGO_URL)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return
  if (mongoConnection.isConnected === 0) return

  await mongoose.disconnect()
  // eslint-disable-next-line no-console
  console.log('Disconnected from mongo')
}

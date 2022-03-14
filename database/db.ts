import mongoose from 'mongoose'

export interface IDB {
  isConnected: mongoose.ConnectionStates
}

const mongooConnection: IDB = {
  isConnected: 0
}

export const connect = async () => {
  if (mongooConnection.isConnected > 0) {
    // eslint-disable-next-line no-console
    console.log('Ya estabamos conectados')
    return
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState

    if (mongooConnection.isConnected === 1) {
      // eslint-disable-next-line no-console
      console.log('Usando la conexion anterior')
      return
    }

    await mongoose.disconnect()
  }
  await mongoose.connect(process.env.MONGO_URL || '')
  mongooConnection.isConnected = 1
  // eslint-disable-next-line no-console
  console.log('Conectado a mongodb  ', process.env.MONGO_URL)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return
  if (mongooConnection.isConnected === 0) return

  await mongoose.disconnect()
  // eslint-disable-next-line no-console
  console.log('Disconnected from mongo')
}

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MongoServer = async () => {
  try {
    mongoose.connect(`${process.env.MONGODB}`)
    console.log('connected database')
  } catch (e) {
    console.error(e)
    throw e
  }
}

export default MongoServer

// /lib/dbConnect.js
import mongoose from 'mongoose'

/** 
  Source : 
  https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    mongoose.set('strictQuery', false)
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('Successfully connected to MongoDB Atlas!')
        return mongoose
      })
      .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!')
        console.error(error)
      })
    cached.conn = await cached.promise
    return cached.conn
  }
}

export default dbConnect

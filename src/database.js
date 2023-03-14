import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(config.mongoDbUrl)
    console.log('Database is connect to:' , db.connection.name)
  } catch (error) {
    console.error(error)
  }
})()
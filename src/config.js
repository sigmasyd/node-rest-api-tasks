import {config} from 'dotenv'
config()

export default {
  mongoDbUrl: process.env.MONGODB_URI || 'mongodb://localhost/taskdb'
}
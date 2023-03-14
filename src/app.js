import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import TasksRoutes from './routes/tasks.routes'

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
const corsOptions = {
  //origin: 'http://localhost:3000' // si es vacio, acepta peticiones de todos lados
}
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))  // aceptar form

// routes
app.get('/', (req, res) => {
  res.json({message: 'Welcome'})
})

app.use('/api/tasks', TasksRoutes)

export default app
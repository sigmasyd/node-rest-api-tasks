import express from 'express'
import TasksRoutes from './routes/tasks.routes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.json({message: 'Welcome'})
})

app.use('/api/tasks', TasksRoutes)

export default app
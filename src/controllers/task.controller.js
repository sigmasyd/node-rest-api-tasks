import Task from '../models/Task'

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title, 
    description: req.body.description
  })
  const taskSaved = await newTask.save()
  res.json(taskSaved)
}

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

export const findOneTask = async (req, res) => {
  const id = req.params.id
  const task = await Task.findById(id)
  res.json(task)
}

export const updateTask = async (req, res) => {}

export const deleteTask = async (req, res) => {}
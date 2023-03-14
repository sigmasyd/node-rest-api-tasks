import Task from '../models/Task'

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title, 
    description: req.body.description,
    done: req.body.done ? req.body.done : false
  })
  const taskSaved = await newTask.save()
  res.json(taskSaved)
}

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

export const findAllDoneTask = async (req, res) => {
  const tasks = await Task.find({done: true})
  res.json(tasks)
}

export const findOneTask = async (req, res) => {
  const id = req.params.id
  const task = await Task.findById(id)
  res.json(task)
}

export const updateTask = async (req, res) => {
  const id = req.params.id  
  await Task.findByIdAndUpdate(id, req.body)
  res.json({
    message: `Task was updated successfully`
  })
}

export const deleteTask = async (req, res) => {
  const id = req.params.id
  await Task.findByIdAndDelete(id)
  res.json({
    message: `${id} Task were deleted successfully`
  })
}
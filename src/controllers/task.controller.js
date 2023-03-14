import Task from '../models/Task'

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title cannot be empty"
    })
  }
  try {
    const newTask = new Task({
      title: req.body.title, 
      description: req.body.description,
      done: req.body.done ? req.body.done : false
    })
    const taskSaved = await newTask.save()
    res.json(taskSaved)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong creating a task'
    })
  }
}

export const findAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong retrieving the tasks'
    })
  }
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
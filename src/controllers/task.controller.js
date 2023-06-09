import Task from '../models/Task'
import { getPagination } from '../libs/getPagination'

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
    const {size, page, title} = req.query

    const condition = title 
      ? {
        title: { $regex: new RegExp(title), $options: "i" }
      } : {}

    const { limit, offset} = getPagination(page, size)

    const data = await Task.paginate(condition, {offset, limit})

    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1
    })
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
  const { id } = req.params
  try {
    const task = await Task.findById(id)

    if (!task) {
      return res.status(400).json({
        message: `Task con id ${id} does not exist`
      })
    }

    res.json(task)
  } catch (error) {
    res.status(500).json({
      message: error.message || `Something goes wrong retrieving the task with id ${id}`
    })
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndUpdate(id, req.body)
  res.json({
    message: `Task was updated successfully`
  })
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    await Task.findByIdAndDelete(id)
    res.json({
      message: `${id} Task were deleted successfully`
    })    
  } catch (error) {
    res.status(500).json({
      message: error.message || `Cannot delete task with id ${id}`
    })
  }
}
import { Router } from 'express'
import * as taskCtrl from '../controllers/task.controller'

const router = Router()

router.get('/', taskCtrl.findAllTasks)

router.post('/', taskCtrl.createTask)

router.put('/:id', taskCtrl.updateTask)

router.delete('/:id', taskCtrl.deleteTask)

export default router
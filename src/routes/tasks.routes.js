import { Router } from 'express'
import * as taskCtrl from '../controllers/task.controller'

const router = Router()

router.post('/', taskCtrl.createTask)

router.get('/', taskCtrl.findAllTasks)

router.get('/done', taskCtrl.findAllDoneTask)

router.get('/:id', taskCtrl.findOneTask)

router.put('/:id', taskCtrl.updateTask)

router.delete('/:id', taskCtrl.deleteTask)

export default router
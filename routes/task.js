import express from 'express'
import { allTask, newTask ,updateTask,deleteTask} from '../controllers/task.js'
import { isAuthenticated } from '../middlewares/isAuthenticated.js'

export const routerTask = express.Router();

routerTask.post('/new',isAuthenticated,newTask);
routerTask.post('/all',isAuthenticated,allTask);
routerTask.route('/:_id').put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);

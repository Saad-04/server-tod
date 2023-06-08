import ErrorHandler from "../middlewares/errorMiddleware.js";
import {
    Task
} from "../models/task.js";


export const newTask = async (req, res, next) => {
    try {
        const {
            title,
            discription
        } = req.body;
        await Task.create({
            title: 'title',
            discription: 'this is discription ',
            user: req.user
        })
        await res.status(201).json({
            success: true,
            message: "add succesfullu"
        })
    } catch (error) {
        next(error)
    }
}

// get all tasks
export const allTask = async (req, res, next) => {

   try {
    const userId =await req.user._id;
    const task = await Task.find({
        user: userId
    })
    
    if (!task){return next(new ErrorHandler('wronge user id',404))}
    await res.status(200).json({
        success: true,
        task:{task}
    })
   } catch (error) {
    next(error)
   }
}

export const updateTask = async (req, res, next) => {

    try {
        const {_id}=await req.params;
    const task = await Task.findById({_id})
    if (!task){return next(new ErrorHandler('invalid user',404))}

    task.isComplete =!task.isCompleted
    task.save()
    await res.status(200).json({
        success: true, task
    })
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async (req, res, next) => {

  try {
      // const {_id}=await req.params;
      const task = await Task.findById(req.params._id)
      if (!task){return next(new ErrorHandler('invalid user',404))}
  
      await task.deleteOne()
      res.status(200).json({
          success: true
      });
  } catch (error) {
    next(error)
  }
    
}


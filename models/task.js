import mongoose from "mongoose"

// create colleciton 
const schema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
      default:false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export const Task = mongoose.model('Task',schema)



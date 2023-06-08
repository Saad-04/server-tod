import { User } from "../models/userModel.js";
import jwt from 'jsonwebtoken';
export const isAuthenticated=async(req,res,next)=>{
const {token} = req.cookies

console.log(token)
if(!token){
res.status(200).json({
success:true,
message:'login first '
})}

const decode = await jwt.verify(token,process.env.SECRET_ID);
req.user = await User.findOne({_id:decode._id})
next()
}
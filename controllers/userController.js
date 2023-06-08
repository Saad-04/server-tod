import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../util/features.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
// register user 
export const register=async(req,res,next)=>{
try {
    
const {name,email,password} =await req.body;
let user = await User.findOne({email});
if(user){  return next(new ErrorHandler('user already exist',404)) }
else{
const hashedPassword = await bcrypt.hash(password,10)
user = await User.create({
    name,
    email,
    password:hashedPassword
})
sendCookie(user,res,"registered successfully",201)
}
} catch (error) {
    next(error)
}}

// login ?
export const login= async (req,res,next)=>{
   try {
    const {email,password} =await req.body;
    let user = await User.findOne({email}).select("+password");
    if(!user){return next(new ErrorHandler('invalid email and password',404))} 

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){return next(new ErrorHandler('wronge password',404))} 

            sendCookie(user,res,user.name,201)
   } catch (error) {
    next(error)
   } 
}
// login ?
export const logout= async (req,res,next)=>{
    try {
         return res.status(404).cookie("token","",{
            expires:new Date(Date.now())
           }).json({
                success:true,
                message:'logout',
                sameSite:process.env.NODE_URL ==="DEVELOPMENT"?'lax':'none',
 secure:process.env.NODE_URL ==="DEVELOPMENT"?true:false,
            })} 
    catch (error) {
        next(error)
    }}
          
            
// userData 
export const  userDetail= async (req,res)=>{

    res.json({
        success:true,
        user:req.user
    })
 }
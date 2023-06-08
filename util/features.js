import jwt from 'jsonwebtoken'
export const sendCookie= async (user,res,message,statusCode)=>{

const token = await jwt.sign({_id:user._id},process.env.SECRET_ID)
await res.status(statusCode).cookie('token',token,
{httpOnly:true,
 maxAge:15*60*1000,
 sameSite:process.env.NODE_ENV ==="DEVELOPMENT"?'lax':'none',
 secure:process.env.NODE_ENV ==="DEVELOPMENT"?false:true,
 

}).json({
    success:true,
    message
})
}
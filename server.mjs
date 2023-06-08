import app from './app.js'
import connectDb from "./database/connectDb.js";
// create database here 
connectDb()
app.listen(process.env.PORT, () => {
    console.log(`server starts ${process.env.PORT} in ${process.env.NODE_ENV} MODE`)
})
import express from "express";
import {router} from "./routes/userRoutes.js";
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from "cookie-parser";
import { routerTask } from "./routes/task.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
export const app = express();
config({
    "path":"./database/config.env"
})
// user all router here 
app.use(cors({
    origins:[process.env.NODE_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/user", router)
app.use("/api/v1/task", routerTask)

app.get('/', (req, res) => {
    res.send('show message ')
})
app.use(errorMiddleware)




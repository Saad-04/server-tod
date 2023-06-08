import express from "express";
import {login,userDetail,register,logout} from '../controllers/userController.js'
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import jwt from 'jsonwebtoken'

export const router = express.Router()


router.get('/me', isAuthenticated,userDetail)
router.post('/register',register)
router.post('/login', login)
router.get('/logout',logout,)


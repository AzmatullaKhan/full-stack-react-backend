import express from "express"
import { getUserDetails } from "../controllers/LoginControllers"

export  const LoginRouter=express.Router()

LoginRouter.post('/', getUserDetails)
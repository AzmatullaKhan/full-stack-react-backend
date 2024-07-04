import express from "express"
import { getUserDetails, getUserDetailsMobile, updateUserDetails } from "../controllers/LoginControllers"

export  const LoginRouter=express.Router()

LoginRouter.post('/', getUserDetails)
LoginRouter.post('/getUserDetailsMobile', getUserDetailsMobile)
LoginRouter.post('/updaePassword', updateUserDetails)
import express from "express"
import { addSignUp, getAllSignUps, isNumberExist, isUserNameExist } from '../controllers/SignUpControllers.js'


export const SignUpRouter= express.Router();

SignUpRouter.get('/', getAllSignUps)
SignUpRouter.post('/addUser', addSignUp)
SignUpRouter.post('/userExist', isUserNameExist)
SignUpRouter.post('/numberExist', isNumberExist)
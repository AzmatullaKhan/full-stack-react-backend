import express from "express"
import { addSignUp, getAllSignUps } from '../controllers/SignUpControllers.js'


export const SignUpRouter= express.Router();

SignUpRouter.get('/', getAllSignUps)
SignUpRouter.post('/addUser', addSignUp)
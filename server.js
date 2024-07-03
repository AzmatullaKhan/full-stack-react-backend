import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import { SignUpRouter } from './routes/SignUpRoutes.js'
import { LoginRouter } from './routes/LoginRoutes.js'

const server = express()

server.use(cors())
server.use(express.json())
server.use(bodyParser.json())

let url='mongodb+srv://azmatulla:4356@trail1.jazekbs.mongodb.net/'
let port=5000

mongoose.connect(url)
.then(()=>{server.listen(port)})
.then(()=>{console.log(`Server connected to port ${port}`)})
.catch((err)=>{console.log("Exception Occured")})

server.use('/singUpServer', SignUpRouter)
server.use('/loginServer', LoginRouter)
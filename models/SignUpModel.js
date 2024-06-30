import mongoose from "mongoose";

const Schema=mongoose.Schema;

const SignUpModel = new Schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

export default mongoose.model('SignUpModels', SignUpModel)
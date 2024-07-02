import SignUpModels from '../models/SignUpModel.js'

export const getAllSignUps= async(req, res)=>{
    let signUps;

    try{
        signUps=await SignUpModels.find();
    }
    catch(err){
        console.log('Exception Detected')
    }

    if(!signUps)
        return res.status(404).json({message:"Data ain't available"})

    return res.status(200).json({signUps})
}

export const addSignUp=async(req, res)=>{
    let { username, password, mobileNumber, dateOfBirth, gender }=req.body

    let newUser = new SignUpModels({username, password, mobileNumber, dateOfBirth, gender})

    try{
        await newUser.save()
        return res.status(200).json({message:"Inserted Successfully"})
    }catch(err){
        return res.status(200).json({message:err.errmsg})

    }

}

export const isUserNameExist=async(req,res)=>{
    let {username}=req.body

    let existUserUsername;

    try{
        existUserUsername =await SignUpModels.findOne({username});
    }catch(err){
        console.log('Exception Detected Username')
    }

    if(existUserUsername)
        return res.status(200).json({message:"stop"})

    return res.status(200).json({message:"proceed"})
}

export const isNumberExist=async(req,res)=>{
    let {mobileNumber}=req.body

    let existMobileNumber;

    try{
        existMobileNumber =await SignUpModels.findOne({mobileNumber});
    }catch(err){
        console.log('Exception Detected mobileNumber')
    }

    if(existMobileNumber)
        return res.status(200).json({message:"stop"})

    return res.status(200).json({message:"proceed"})
}
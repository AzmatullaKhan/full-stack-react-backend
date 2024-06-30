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
    
    let existUserMobileNumber;
    let existUserUsername;

    try{
        existUserMobileNumber =await SignUpModels.findOne({mobileNumber});
    }catch(err){
        console.log('Exception Detected')
    }

    try{
        existUserUsername = await SignUpModels.findOne({username})
    }catch(err){
        console.log('Exception Detected')
    }

    if(existUserMobileNumber)
        return res.status(404).json({message:"A user with same mobile already exists"})

    if(existUserUsername)
        return res.status(404).json({message:"A user with same username already exists"})

    let newUser = new SignUpModels({username, password, mobileNumber, dateOfBirth, gender})

    try{
        await newUser.save()
    }catch(err){
        console.log('Exception Detected')
    }

    return res.status(200).json({message:"Inserted Successfully"})
}
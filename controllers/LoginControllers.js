import SignUpModels from '../models/SignUpModel.js'


export const getUserDetails=async(req, res)=>{
    let {username}= req.body

    let userDetails;
    try {
        userDetails= await SignUpModels.findOne({username})
    } catch (error) {
        console.log(error)
    }

    if(userDetails)
        return res.status(200).json({message:userDetails})

    return res.status(404).json({message:"No User"})
}

export const getUserDetailsMobile=async(req, res)=>{
    let {mobileNumber}= req.body

    let userDetails;
    try {
        userDetails= await SignUpModels.findOne({mobileNumber})
    } catch (error) {
        console.log(error)
    }

    if(userDetails)
        return res.status(200).json({message:"proceed"})

    return res.status(200).json({message:"stop"})
}

export const updateUserDetails=async(req, res)=>{
    let {mobileNumber, password}= req.body

    let userDetails;
    try {
        userDetails= await SignUpModels.findOne({mobileNumber})
    } catch (error) {
        console.log(error)
    }

    if(userDetails){
        userDetails.password=password
        userDetails.save()
        return res.status(200).json({message:"done"})
    }

    return res.status(404).json({message:"error"})
}
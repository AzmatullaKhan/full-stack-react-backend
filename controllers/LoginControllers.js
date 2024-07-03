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
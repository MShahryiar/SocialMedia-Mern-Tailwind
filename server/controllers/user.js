import UserProfile from "../models/UserProfile.js"
// Create
export const CreateUserProfile = async(req,res) => {
    try{
        const {name, email, dob, city, country, fbLink, InstaLink} = req.body
        const newUserProfile = new UserProfile({
            name, email, dob, city, country, fbLink, InstaLink
        })
        await newUserProfile.save()
        res.status(201).json({message:"user profile created successfully!"})
    }
    catch(err){
        res.status(409).json({message:err.message})
    }
}

export const getUser = async(req, res)=>{
    try{
        const {email} = req.params

        const user = await UserProfile.find({email:email})
        res.status(200).json({user})
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

export const getAllUsers = async(req, res) =>{ 
    try{
        const users = await UserProfile.find()
        res.status(200).json({users})
        // res.json({message:"In All Users"})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}
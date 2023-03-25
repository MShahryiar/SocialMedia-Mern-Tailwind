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


export const AddDeleteFriend = async(req,res)=>{
    try{
        const {id,friendId} = req.params
        const user = await UserProfile.findById(id)
        const friend = await UserProfile.findById(friendId)

        if (user.friends.includes(friendId)){
            // const friendToRemove = user.friends.indexOf(friendId)
            // const x = user.friends.splice(friendToRemove,1)

            // user.friends = user.friends
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        }
        else{
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id)=> UserProfile.findById(id))
        )
        res.status(200).json({friends})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}

export const getUserFriends = async(req,res) => {
    try{
        const {id} = req.params

        const user = await UserProfile.findById(id)
    
        const friends = await Promise.all(
            user.friends.map((id) => UserProfile.findById(id))
        )
        res.status(200).json({friends})      

    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}
import Post from "../models/Post.js";

export const createPost = async(req, res) => {
    try{
        const {UserId, postDescription} = req.body
        const newPost = new Post({
            userId:UserId, description: postDescription, likes:{}, comments:[]
        })
        await newPost.save()
        res.status(201).json({message:"Post Created"})
    }
    catch(err){
        res.status(409).json({message:err.message})
    }
}
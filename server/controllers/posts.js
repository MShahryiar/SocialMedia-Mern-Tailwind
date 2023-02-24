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

export const getAllPosts = async(req, res) => {
    try{
        const posts = await Post.find({})
        res.status(200).json({posts})
        // res.status(200).json({message:"Data Fetching."})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}
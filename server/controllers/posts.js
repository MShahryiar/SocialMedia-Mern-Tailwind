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

export const getUserPosts = async(req, res) => {
    try{
        const {userId} = req.params
        const Userposts = await Post.find({userId:userId})
        res.status(200).json({Userposts})
        // res.status(200).json({message:`Fetching User ${userId} posts`})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}

export const DeletePost = async (req, res) => {
    try{
        const {id} = req.params
        const post = await Post.findById(id)
        post.deleteOne()
        res.status(200).json("POST DELETED")
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}

export const likePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      
      const post = await Post.findById(id);
      const isLiked = post.likes.get(userId);
  
      if (isLiked) {
        post.likes.delete(userId);
      } else {
        post.likes.set(userId, true);
      }
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    // res.status(404).json({userID:userId, postId:id})
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const AddComment = async (req, res) => {
    try {
      const { postId } = req.params;
      const { activeUser,commentDescription } = req.body;
      
      const post = await Post.findById(postId);
      post.comments.push({activeUser, commentDescription})
  
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { comments: post.comments },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    // res.status(404).json({userID:userId, postId:id})
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const { comment } = req.body;
      
      const post = await Post.findById(id);
     
      post.comments = post.comments.filter((commentDel) => commentDel.commentDescription !== comment);
      await post.save()

    
  
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };


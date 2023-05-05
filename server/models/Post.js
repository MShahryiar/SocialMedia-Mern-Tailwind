import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    likes:{
        type:Map,
        of:Boolean,
    },
    comments:{
        type:Array,
        default:[],
        
    }


},{timestamps:true})

const Post = mongoose.model("PostsSocial", PostSchema)
export default Post
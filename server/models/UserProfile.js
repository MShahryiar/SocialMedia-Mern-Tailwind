import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    name:{
        type:String,
        required:true,
        min:2, 
        max:50,
    },
    dob:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true,
        min:2, 
        max:50,
    },
    country:{
        type:String,
        required:true,
        min:2, 
        max:50,
    },
    fbLink:{
        type:String,
        required:true
    },
    InstaLink:{
        type:String,
        required:true
    },
    friends:{
            type:Array,
            default:[],
        },
},{timestamps:true})


const UserProfile = mongoose.model("UserProfile", UserProfileSchema)
export default UserProfile

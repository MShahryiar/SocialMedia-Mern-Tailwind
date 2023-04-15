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
        default:"N/A"
    },
    dob:{
        type:Date,
        required:true,
        default:"N/A"
    },
    city:{
        type:String,
        required:true,
        min:2, 
        max:50,
        default:"N/A"
    },
    country:{
        type:String,
        required:true,
        min:2, 
        max:50,
        default:"N/A"
    },
    fbLink:{
        type:String,
        required:true,
        default:"N/A"
    },
    InstaLink:{
        type:String,
        required:true,
        default:"N/A"
        
    },
    friends:{
            type:Array,
            default:[],
        },
},{timestamps:true})


const UserProfile = mongoose.model("UserProfile", UserProfileSchema)
export default UserProfile

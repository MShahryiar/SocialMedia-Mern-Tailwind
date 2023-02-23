import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import UserProfile from "./routes/UserProfile.js"
import Posts from "./routes/Posts.js"



dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
// app.use(bodyParser.json()); // Send JSON responses

app.use('/', UserProfile)
app.use('/posts', Posts)
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(PORT, ()=>console.log(`Server running on PORT : ${PORT}`))

})
.catch((error)=> console.log(`${error} did not connect.`))
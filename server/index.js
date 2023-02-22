import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import UserProfile from "./routes/UserProfile.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


app.use('/', UserProfile)
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(PORT, ()=>console.log(`Server running on PORT : ${PORT}`))

})
.catch((error)=> console.log(`${error} did not connect.`))
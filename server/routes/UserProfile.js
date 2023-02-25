import express from "express"
import { CreateUserProfile,getUser, getAllUsers, } from "../controllers/user.js"

const router = express.Router()

router.post('/', CreateUserProfile)
router.get('/:email',getUser )
router.get('/',getAllUsers )

export default router
import express from "express"
import { CreateUserProfile,getUser, getAllUsers,AddDeleteFriend } from "../controllers/user.js"

const router = express.Router()

router.post('/', CreateUserProfile)
router.get('/:email',getUser )
router.get('/',getAllUsers )
router.patch("/:id/:friendId", AddDeleteFriend)

export default router
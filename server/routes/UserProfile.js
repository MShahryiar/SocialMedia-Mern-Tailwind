import express from "express"
import { CreateUserProfile,getUser,AddDeleteFriend,getUserFriends } from "../controllers/user.js"

const router = express.Router()

router.post('/', CreateUserProfile)
router.get('/:email',getUser )
// router.get('/',getAllUsers )
router.patch("/:id/:friendId", AddDeleteFriend)
router.get("/:id/friends", getUserFriends)

export default router
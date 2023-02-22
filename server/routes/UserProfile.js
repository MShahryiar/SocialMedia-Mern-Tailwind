import express from "express"
import {
    CreateUserProfile,
    getUser,

} from "../controllers/user.js"

const router = express.Router()

router.post('/', CreateUserProfile)
router.get('/:email',getUser )

export default router
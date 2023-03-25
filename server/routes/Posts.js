import express from "express"

import { createPost,getAllPosts,DeletePost,getUserPosts } from "../controllers/posts.js"

const router = express.Router()

router.post('/', createPost)
router.get('/',getAllPosts)
router.delete('/:id', DeletePost)
router.get('/user/:userId', getUserPosts)


export default router

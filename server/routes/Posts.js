import express from "express"

import { createPost,getAllPosts,DeletePost,getUserPosts, likePost } from "../controllers/posts.js"

const router = express.Router()

router.post('/', createPost)
router.get('/',getAllPosts)
router.delete('/:id', DeletePost)
router.get('/user/:userId', getUserPosts)
router.patch('/:id/like', likePost)


export default router

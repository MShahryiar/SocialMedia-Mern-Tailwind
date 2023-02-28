import express from "express"

import { createPost,getAllPosts,DeletePost } from "../controllers/posts.js"

const router = express.Router()

router.post('/', createPost)
router.get('/',getAllPosts)
router.delete('/:id', DeletePost)


export default router

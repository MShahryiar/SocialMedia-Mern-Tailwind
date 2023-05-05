import express from "express"

import { createPost,getAllPosts,DeletePost,getUserPosts, likePost,AddComment,deleteComment } from "../controllers/posts.js"

const router = express.Router()

router.post('/', createPost)
router.post('/:postId', AddComment)
router.delete('/:id/comment', deleteComment)
router.get('/',getAllPosts)
router.delete('/:id', DeletePost)
router.get('/:userId/posts', getUserPosts)
router.patch('/:id/like', likePost)


export default router

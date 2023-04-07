import React, { useEffect } from 'react'
// import { setPost } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function PostWidget({key, postUser, postId, description, likes, comments}) {
  const dispatch = useDispatch()
  const loggedInUserId = useSelector((state) => state.user.activeUserId)
  
  // const LoggedInUserIdFixed = '6409649946102d52beedbb84'
  const isLiked = Boolean(likes[loggedInUserId])
  const likeCount = Object.keys(likes).length

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: loggedInUserId}),
    })
    const updatedPost = await response.json();
    console.log(updatedPost)
    // dispatch(setPost({ post: updatedPost }));
    // const updatedPost = await response.json();
    // console.log(updatedPost)
    // console.log(isLiked)
  };
  return (

    <div>
      <p key={postId}>{description}</p>
      <button onClick={()=>patchLike()} className="bg-red-400 p-1 rounded text-white ">{isLiked?"Un-Like":"Like"}</button>
      <p>Likes : {likeCount}</p>
    </div>
  )
}

export default PostWidget


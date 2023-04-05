import React from 'react'
import { setPost } from '../features/userSlice'
import { useDispatch } from 'react-redux'

function PostWidget({key, postUser, postId, description, likes, comments}) {
  const dispatch = useDispatch()
  const LoggedInUserIdFixed = '6409649946102d52beedbb84'
  const isLiked = Boolean(likes[LoggedInUserIdFixed])
  const likeCount = Object.keys(likes).length

  
  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: LoggedInUserIdFixed }),
    })
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    // const updatedPost = await response.json();
    // console.log(updatedPost)
    // console.log(isLiked)
  };
  return (

    <div>
      <p key={postId}>{description}</p>
      <button onClick={()=>patchLike()} className="bg-red-400 p-1 rounded text-white ">{isLiked?"Like":"Dis-Like"}</button>
    </div>
  )
}

export default PostWidget


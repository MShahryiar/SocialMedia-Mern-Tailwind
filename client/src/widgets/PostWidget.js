import React, { useEffect } from 'react'
import { setPost } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { HandThumbUpIcon as OutlineThumbsUp} from '@heroicons/react/24/outline'
import { HandThumbUpIcon as SolidThumbsUp} from "@heroicons/react/24/solid"
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'

function PostWidget({activeUser,postUser, postId, description, likes, comments}) {
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
    // console.log(updatedPost)
    dispatch(setPost({ post: updatedPost }));
    // const updatedPost = await response.json();
    // console.log(updatedPost)
    // console.log(isLiked)
  };
  return (

    <div key={postId} className='bg-white m-2 mt-5 p-5'>
      <div className='flex justify-between'>
        <div className='flex justify-start items-center space-x-3'><div className='bg-red-600 h-10 w-10 rounded-full'></div><p>{postUser}</p></div>
        <div>
          {postUser !== activeUser ? <button><UserPlusIcon className='h-7 w-7'/></button>:""}
          {activeUser === postUser ? <button><TrashIcon className='h-7 w-7  text-red-600'/></button>:""}
        </div>
      </div>
      <p className='p-5 text-lg'>{description}</p>
      <button  className='flex items-center'  onClick={()=>patchLike()}>{isLiked?(<SolidThumbsUp className='h-10 w-10 text-green-600'/>):(<OutlineThumbsUp className='h-10 w-10'/>)} <span className='ml-3'>{likeCount}</span></button>
    </div>
  )
}

export default PostWidget


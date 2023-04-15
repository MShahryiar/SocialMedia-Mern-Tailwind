import React, { useEffect, useState } from 'react'
import { setPost } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { HandThumbUpIcon as OutlineThumbsUp} from '@heroicons/react/24/outline'
import { HandThumbUpIcon as SolidThumbsUp} from "@heroicons/react/24/solid"
import { UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'
import {setFriends} from "../features/userSlice"
import { useNavigate } from 'react-router-dom'
function PostWidget({activeUser,postUser, postId, description, likes, comments}) {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const loggedInUserId = useSelector((state) => state.user.activeUserId)
  
  const isLiked = Boolean(likes[loggedInUserId])
  const likeCount = Object.keys(likes).length
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === postUser);



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
  const AddFriend = async() => {
    try{

      const response = await fetch(`http://localhost:3001/users/${activeUser}/${postUser}`,
      {
        method:"PATCH",
      })
      const data = await response.json()
      // addtoFriends(data)
      dispatch(setFriends({ friends: data.friends }))
      
      // console.log("Adding/Removing Friends - ",data)      
    }
    catch(err){
      console.log(err)
    }
  }

  
  return (

    <div key={postId} className='bg-white m-2 mt-5 p-5'>
      <div className='flex justify-between'>
        <div className='flex justify-start items-center space-x-3'><div className='bg-red-600 h-10 w-10 rounded-full'></div><p onClick={()=>navigate(`/user/${postUser}`)}>{postUser}</p></div>
        <div>
          {postUser !== activeUser ? <button onClick={()=>AddFriend()}>{isFriend?<UserMinusIcon className='h-7 w-7'/>:<UserPlusIcon className='h-7 w-7'/>}</button>:""}
          {activeUser === postUser ? <button><TrashIcon className='h-7 w-7  text-red-600'/></button>:""}
        </div>
      </div>
      <p className='p-5 text-lg'>{description}</p>
      <button  className='flex items-center'  onClick={()=>patchLike()}>{isLiked?(<SolidThumbsUp className='h-10 w-10 text-green-600'/>):(<OutlineThumbsUp className='h-10 w-10'/>)} <span className='ml-3'>{likeCount}</span></button>
    </div>
  )
}

export default PostWidget


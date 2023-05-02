import React, { useEffect, useState } from 'react'
import { setPost } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { HandThumbUpIcon as OutlineThumbsUp} from '@heroicons/react/24/outline'
import { HandThumbUpIcon as SolidThumbsUp} from "@heroicons/react/24/solid"
import { UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterTextIcon as Chat } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'
import {setFriends} from "../features/userSlice"
import { useNavigate } from 'react-router-dom'
function PostWidget({activeUser,postUser, postId, description, likes, comments}) {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const loggedInUserId = useSelector((state) => state.user.activeUserId)
  
  const isLiked = Boolean(likes[loggedInUserId])
  const likeCount = Object.keys(likes).length
  const commentsCount = comments.length
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === postUser);
  const [commentsSection, setCommentsSection] = useState(false)
  const [commentDescription, setCommentDescription] = useState("")

  const handleSubmit = async(e) => {
      e.preventDefault()

      const response = await fetch(`http://localhost:3001/posts/${postId}`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
      },
      body: JSON.stringify({activeUser, commentDescription}),
      })
      
      const updatedPost = await response.json();
      console.log(updatedPost)
      // dispatch(setPost({ post: updatedPost }));

  }
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

    <div key={postId} className='bg-white border-dashed border-2 rounded   border-emerald-700 m-2 mt-5 p-5 '>
      <div className='flex justify-between'>
        <div className='flex justify-start items-center space-x-3'><div className='bg-red-600 h-10 w-10 rounded-full'></div><p className='hover:cursor-pointer hover:underline' onClick={()=>navigate(`/user/${postUser}`)}>{postUser}</p></div>
        <div>
          {postUser !== activeUser ? <button onClick={()=>AddFriend()}>{isFriend?<UserMinusIcon className='h-7 w-7'/>:<UserPlusIcon className='h-7 w-7'/>}</button>:""}
          {activeUser === postUser ? <button><TrashIcon className='h-7 w-7  text-red-600'/></button>:""}
        </div>
      </div>
      <p className='p-5 text-lg'>{description}</p>
      <div className='flex justify-between'>

      <button  className='flex items-center'  onClick={()=>patchLike()}>{isLiked?(<SolidThumbsUp className='h-10 w-10 text-green-600'/>):(<OutlineThumbsUp className='h-10 w-10'/>)} <span className='ml-3'>{likeCount}</span></button>
      <button className='flex'><Chat className='h-7 w-7' onClick={()=>setCommentsSection(!commentsSection)}/>{commentsCount}</button>
      </div>
      <div className=' mt-5'>
        {commentsSection && (

        <div>
          <form onSubmit={handleSubmit}>
            <div className='flex space-x-3 '>
            <input maxLength={50} onChange={(e)=>setCommentDescription(e.target.value)} required  className='w-full p-2  text-lg rounded-md border border-black'/>
            <button className='bg-gray-800 rounded p-2 text-white' >Comment</button>
            </div>
          </form>
        </div>
        )}
       
      </div>
    </div>
  )
}

export default PostWidget


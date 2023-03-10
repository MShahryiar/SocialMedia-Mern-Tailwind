import React from 'react'
import { useDispatch } from 'react-redux'
import { setFriends } from '../features/userSlice'


function Friend({email,id,UserId}) {

  const dispatch = useDispatch()

  const PatchFriend = async(id) => {
    try{

      const response = await fetch(`http://localhost:3001/users/${UserId}/${id}`,
      {
        method:"PATCH",
      })
      const data = await response.json()
      // addtoFriends(data)
      dispatch(setFriends({ friends: data.friends }))
      
      console.log("Adding/Removing Friends - FriendsWidget ",data)      
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='flex justify-between rounded-md bg-white p-1'>
      <p >{email}</p>
      <button className='p-1 bg-red-500 text-white rounded-full' onClick={()=>PatchFriend(id)}>R</button>
    </div>
  )
}

export default Friend
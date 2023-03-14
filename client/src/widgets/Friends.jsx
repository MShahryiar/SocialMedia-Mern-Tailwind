import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from '../features/userSlice'
import Friend from './Friend';
// import Friend from './Friend'

const Friends = ({UserId}) => {
  const friends = useSelector((state) => state.user.friends);
  const dispatch = useDispatch()
  // const [userFriends, setUserFriends] = useState([])


  const getUserFriends = async() => {
    
    try{
      const res = await fetch(
        `http://localhost:3001/users/${UserId}/friends`,
        {
          method:"GET",
        }
        )
        const data = await res.json();       
        // 
        // setUserFriends(data.friends)
        // console.log("user Friends - FETCHED",userFriends)
        dispatch(setFriends({friends:data.friends}))
        
      }
      catch(err){
        console.log(err)
      }
      }



useEffect(()=>{
  getUserFriends()
  // console.log("Coming from Store -> ",friends)
},[])// eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className='bg-red-200 col-span-2 h-fit p-5 '><span className='underline underline-offset-4 text-xl'>Friends</span> 
      { friends.length>0?<p>Friends Present</p>:<p>No Friends</p>}
      {friends?.map((friend)=>(
        <Friend key={friend._id} id={friend._id} UserId={UserId} email={friend.email}/>
      ))}
      <p> User Friends - dispatch(store) - {friends?.length}</p>
    </div>
  )
}


export default Friends
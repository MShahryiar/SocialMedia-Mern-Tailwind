import React, {useState, useEffect} from 'react'
import Friend from './Friend'


const Friends = ({Email,UserId}) => {
  
  // const userEmail = Email
  const [userFriends, setUserFriends] = useState()
  const [friends, setFriends] = useState([])
  let isFriend = ""

  const getUserFriends = async(id) => {
    try{
      const res = await fetch(`http://localhost:3001/users/${id}/friends`,
        {
          method:"GET",
        })

        const data = await res.json()
        // setUserFriends(data.friends)
        console.log(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    // getUserFriends(UserId)
  },[])


  const AddRemoveFriend = async(id) => {
    try{
      const response = await fetch(`http://localhost:3001/users/${UserId}/${id}`,
        {
          method:"PATCH",
        })
      const friend = await response.json()
      console.log(friend.friends)
      setFriends(friend.friends)
      isFriend = allUsers.includes((user) => user._id === "63f63e47f5084fce734e78eb")
      
      console.log("Friends ? : ", isFriend)
    }
    catch(err){
      console.log('Error')
    }
    // alert(`User : ${UserId} - Friend : ${id} `)
}


  // const getPeople = async() => {
  //   try{

  //     const api  = await fetch("http://localhost:3001/users/",{
  //         method:"GET",
  //     })
      
  //     const data = await api.json()
  //     setAllUsers(data.users)
      
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  const [allUsers, setAllUsers] = useState([])
  // useEffect(()=>{
  //   getPeople()
  // },[])
  
  // const isFriend = friends.find((friend) => friend._id === people._id)
  return (
    <div className='bg-red-200 col-span-2 h-fit p-5 '><span className='underline underline-offset-4 text-xl'>Add Friends</span> 
      {/* {
        
          allUsers.filter(allusers=>allusers.email!==userEmail).map((user)=> (
            
            <div className='flex justify-between mt-2 bg-white  rounded-md p-2' key={user._id}>
            <div className='mt-2'>{user.email}</div>
            <button className='bg-gray-200 p-2 rounded hover:cursor-pointer' onClick={()=>{
              // getUserFriends(UserId)
              AddRemoveFriend(user._id)
            }
              }>{isFriend ? "Add":"Remove"}</button>
          </div>
        ))
      } */}

      { userFriends?.map((friend)=>(
        <Friend
          key={friend._id}
          friendId = {friend._id}
        />
      ))}
    </div>
  )
}

export default Friends
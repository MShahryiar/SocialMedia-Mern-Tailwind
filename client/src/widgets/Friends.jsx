import React, {useState, useEffect} from 'react'
import Friend from './Friend'


const Friends = ({UserId}) => {
  
  const [userFriends, setUserFriends] = useState([])

  const getUserFriends = async() => {
    try{

      const res = await fetch(
        `http://localhost:3001/users/${UserId}/friends`,
        {
          method:"GET",
        }
      );
      
      const data = await res.json();
      if (data.friends){        
        console.log("In Data - ", data)
        setUserFriends(data.friends)
      }
      else{
        console.log("No Friends")
      }
    }
    catch{
      console.log("error")
    }
}
useEffect(()=>{
  getUserFriends()
},[])// eslint-disable-line react-hooks/exhaustive-deps


  const AddRemoveFriend = async(id) => {
    try{
      const response = await fetch(`http://localhost:3001/users/${UserId}/${id}`,
        {
          method:"PATCH",
        })
      const friend = await response.json()
      // console.log(friend.friends)
      setUserFriends(friend.friends)
    }
    catch(err){
      console.log('Error')
    }
}

  return (
    <div className='bg-red-200 col-span-2 h-fit p-5 '><span className='underline underline-offset-4 text-xl'>Friends</span> 
      { userFriends.friends?<p>Friends Present</p>:<p>No Friends</p>}
    </div>
  )
}

export default Friends
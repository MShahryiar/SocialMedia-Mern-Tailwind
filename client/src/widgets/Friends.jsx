import React, {useState, useEffect} from 'react'

const Friends = ({Email}) => {
  const userEmail = Email
  const getPeople = async() => {
    try{

      const api  = await fetch("http://localhost:3001/users/",{
          method:"GET",
      })
      
      const data = await api.json()
      // console.log(data)
      setFriends(data.users)
      // console.log(friends)
    }
    catch(err){
      console.log(err)
    }
  }
  const [friends, setFriends] = useState([])
  useEffect(()=>{
    getPeople()
  },[])

  return (
    <div className='bg-red-200 col-span-2 h-fit p-5 '><span className='underline underline-offset-4 text-xl'>Add Friends</span> 
      {
        // {tasks.filter(task=>task.email === email).map((task)=>(
        friends.filter(friend=>friend.email!==userEmail).map((friend)=> (
 
          <div className='flex justify-between mt-2 bg-white  rounded-md p-2' key={friend._id}>
            <div className='mt-2'>{friend.email}</div>
            <button className='bg-gray-200 p-2 rounded hover:cursor-pointer'>Add Friend</button>
          </div>
        ))
      }
    </div>
  )
}

export default Friends
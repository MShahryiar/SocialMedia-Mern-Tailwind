import React, {useState, useEffect, useRef} from 'react'

const Friends = ({Email,UserId}) => {
  const userEmail = Email
  const [userFriends, setUserFriends] = useState()
  const [friends, setFriends] = useState([])


  const getUserFriends = async(id) => {
    try{
      const res = await fetch(`http://localhost:3001/users/${id}/friends`,
        {
          method:"GET",
        }
        )
        console.log(res.json())
        // const data = res.json()
        // setUserFriends(data.friends)
        // console.log(userFriends)
    }
    catch(err){
      console.log(err)
    }
  }
  const AddRemoveFriend = async(id) => {
    try{
      const response = await fetch(`http://localhost:3001/users/${UserId}/${id}`,
        {
          method:"PATCH",
        })
      const friend = await response.json()
      console.log(friend.friends)
      setFriends(friend.friends)
    }
    catch(err){
      console.log('Error')
    }
    // alert(`User : ${UserId} - Friend : ${id} `)
}


  const getPeople = async() => {
    try{

      const api  = await fetch("http://localhost:3001/users/",{
          method:"GET",
      })
      
      const data = await api.json()
      setPeople(data.users)

    }
    catch(err){
      console.log(err)
    }
  }
  const [peoples, setPeople] = useState([])
  useEffect(()=>{
    getPeople()
  },[])

  return (
    <div className='bg-red-200 col-span-2 h-fit p-5 '><span className='underline underline-offset-4 text-xl'>Add Friends</span> 
      {
        // {tasks.filter(task=>task.email === email).map((task)=>(
          peoples.filter(people=>people.email!==userEmail).map((people)=> (
              
          <div className='flex justify-between mt-2 bg-white  rounded-md p-2' key={people._id}>
            <div className='mt-2'>{people.email}</div>
            <button className='bg-gray-200 p-2 rounded hover:cursor-pointer' onClick={()=>{
              AddRemoveFriend(people._id)
              getUserFriends(UserId)}
              }>Add Friend</button>
          </div>
        ))
      }
          <div>
            {
              friends.map((friend)=> (
                <p key={friend._id}>1 - {friend._id}</p>
              ))
            }

          </div>
    </div>
  )
}

export default Friends
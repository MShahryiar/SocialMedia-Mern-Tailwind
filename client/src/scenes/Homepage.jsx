import React, { useEffect, useState } from 'react'
import  { selectUser } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebaseHandler'
import Profile from '../widgets/Profile'
import Post from '../widgets/Post'
import Friends from '../widgets/Friends'
import { useNavigate } from 'react-router-dom'
import { setUserId } from '../features/userSlice'

function Homepage() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const email = user.email
  const [userProfile, setUserProfile] = useState("")
  const emailID = userProfile.email
  const dob = String(userProfile.dob)
  const city = userProfile.city
  const country = userProfile.country
  const fb = userProfile.fbLink
  const insta = userProfile.InstaLink
  const userId = userProfile._id
  const [userAvailable, setUserAvailable] = useState(false)
  const getUser = async() => {
    try{

      const response = await fetch(
        `http://localhost:3001/users/${user.email}`,
        {
        method:"GET",
        });
        
      const data = await response.json()      
      if (data.user[0]){
        setUserProfile(data.user[0])
        // dispatch(setUserId({}))
        const LoggedinUserId = String(data.user[0]._id)
        dispatch(setUserId(LoggedinUserId))
        setUserAvailable(true)
      }
      else{
        console.log("loading")
        setUserAvailable(false)
        
      }
    }
    catch(err){
      console.log(err)
    }
      
  }


  useEffect(()=>{
    getUser()
    // eslint-disable-next-line
  },[])

  return (
    <>
    <nav className='bg-black w-full p-1 flex justify-between'>
    <div className='flex items-center'><h1 className='text-2xl text-white font-bold'>Social Media App</h1></div>
    <div className='items-center flex'><p className='text-white text-xl '>Welcome - <span className='underline underline-offset-8 cursor-pointer' onClick={() => navigate("/")}>{email}</span></p></div>
    <button className='bg-red-400 hover:bg-white hover:text-red-400 hover:border-red-400 text-sm m-2 rounded-md p-3 text-white ' onClick={()=>auth.signOut()}>Logout</button>
    </nav>
    
    <div className='grid grid-cols-8 gap-3 p-1 bg-gray-100'>
      {userAvailable?(
        <Profile UserId={userProfile?userProfile._id:"null"} emailID={emailID} dob={dob} city={city} country={country} fb={fb} insta={insta}/>

      ):<p>Fill the form in the <span className='underline cursor-pointer' onClick={()=>navigate("/")}>profile</span> section to see the data here.</p>}
      <Post UserId={userProfile?userProfile._id:"null"}/>
      {userAvailable?(

        <Friends UserId={userId}/>
      ):<p>Complete the <span className='underline cursor-pointer' onClick={()=>navigate("/")}>profile</span> section to see this section.</p>}
    
    </div>
    </>
  )
}

export default Homepage